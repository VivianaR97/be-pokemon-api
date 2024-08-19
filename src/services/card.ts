import { FindOptionsWhere, ILike, Not } from 'typeorm';
import { Card } from '../entities/card';
import { CardType } from '../model';

export const CardService = {
	getAllCards: async (filters: { skip?: number; take?: number; type?: CardType; name?: string }) => {
		const { skip = 0, take = 5, type, name } = filters;
		const whereConditions = {
			...(type && { type }),
			...(name && { name: ILike(`%${name}%`) }),
		};
		const [cards, count] = await Card.findAndCount({
			where: whereConditions,
			order: { rarity: 'DESC' },
			skip,
			take,
		});

		return {
			cards,
			totalCount: count,
		};
	},

	getCard: async (id: string) => {
		const card = await Card.findOneBy({ id });
		return card;
	},

	getCardsToBattle: async (id: string) => {
		const cardsToBattle = await Card.find({ select: ['id', 'name'], where: { id: Not(id) } });
		return cardsToBattle;
	},

	getCardAttributes: async (card: Card) => {
		const whereConditions: FindOptionsWhere<Card>[] = [];
		const { weaknessType, resistanceType } = card;
		if (weaknessType) {
			whereConditions.push({
				type: weaknessType,
			});
		}

		if (resistanceType) {
			whereConditions.push({
				type: resistanceType,
			});
		}

		const cardsRelated = await Card.find({
			where: whereConditions,
		});

		return {
			card,
			weaknesses: cardsRelated.filter((cardRelated) => cardRelated.type === weaknessType),
			resistances: cardsRelated.filter((cardRelated) => cardRelated.type === resistanceType),
		};
	},

	createCard: async (card: Card) => {
		const newCard = await Card.save(card);
		return newCard;
	},

	updateCard: async (card: Partial<Card>) => {
		const updatedCard = await Card.save(card);
		return updatedCard;
	},

	deleteCard: async (id: string) => {
		await Card.delete(id);
		return true;
	},
};
