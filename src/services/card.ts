import { FindOptionsWhere, IsNull, Not, Or } from 'typeorm';
import { Card } from '../entities/card';

export const CardService = {
	getAllCards: async (filters: { skip?: number; take?: number }) => {
		const { skip = 0, take = 10 } = filters;
		const [cards, count] = await Card.findAndCount({
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

	getCardAttributes: async (id: string) => {
		const card = await Card.findOneBy({ id });
		if (!card) return null;

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

		console.log(cardsRelated);

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
