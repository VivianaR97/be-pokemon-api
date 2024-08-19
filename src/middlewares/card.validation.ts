import { NextFunction, Request, Response } from 'express';
import { validateOrReject } from 'class-validator';
import { In } from 'typeorm';
import { CreateCardValidationSchema, UpdateCardValidationSchema } from '../dtos/card.dto';
import { Attack } from '../entities/attack';
import { CardService } from '../services/card';

const cardAttacksErrorValidations = async (req: Request, card: CreateCardValidationSchema) => {
	const uniqueAttacksQuantity = new Set(req.body.attacks).size;
	if (uniqueAttacksQuantity !== card.attacks.length) return { message: 'Duplicated attacks' };

	const dbAttacks = await Attack.findBy({ id: In(card.attacks) });
	if (dbAttacks.length !== uniqueAttacksQuantity) return { message: 'Invalid attacks' };
};

const cardAttributesErrorValidations = async (card: CreateCardValidationSchema) => {
	if ((!card.weaknessType && (card.weaknessMultiplier || 1) > 0) || (card.weaknessType && !card.weaknessMultiplier))
		return { message: 'Missing information' };

	if ((!card.resistanceType && (card.resistanceAmount || 1) > 0) || (card.resistanceType && !card.resistanceAmount))
		return { message: 'Missing information' };

	if ((!card.abilityName && card.abilityDescription) || (card.abilityDescription && !card.abilityDescription))
		return { message: 'Missing information' };
};

export const getCardValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.params.id) return res.status(400).send();

		const card = await CardService.getCard(req.params.id);
		if (!card) return res.status(400).send();

		req.card = card;
		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};

export const createCardValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.body) return res.status(400).send();

		const card = new CreateCardValidationSchema();
		card.name = req.body.name;
		card.type = req.body.type;
		card.rarity = req.body.rarity;
		card.hp = req.body.hp;
		card.weaknessType = req.body.weaknessType;
		card.weaknessMultiplier = req.body.weaknessMultiplier;
		card.resistanceType = req.body.resistanceType;
		card.resistanceAmount = req.body.resistanceAmount;
		card.abilityName = req.body.abilityName;
		card.abilityDescription = req.body.abilityDescription;
		card.retreatCost = req.body.retreatCost;
		card.attacks = req.body.attacks;

		await validateOrReject(card);

		const cardAttributesErrorValidation = await cardAttributesErrorValidations(card);
		if (cardAttributesErrorValidation?.message)
			res.status(400).send({
				message: cardAttributesErrorValidation.message,
			});

		const cardAttacksErrorValidation = await cardAttacksErrorValidations(req, card);
		if (cardAttacksErrorValidation?.message)
			res.status(400).send({
				message: cardAttacksErrorValidation.message,
			});

		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};

export const updateCardValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.body) return res.status(400).send();

		const card = new UpdateCardValidationSchema();
		card.name = req.body.name;
		card.type = req.body.type;
		card.rarity = req.body.rarity;
		card.hp = req.body.hp;
		card.weaknessType = req.body.weaknessType;
		card.weaknessMultiplier = req.body.weaknessMultiplier;
		card.resistanceType = req.body.resistanceType;
		card.resistanceAmount = req.body.resistanceAmount;
		card.abilityName = req.body.abilityName;
		card.abilityDescription = req.body.abilityDescription;
		card.retreatCost = req.body.retreatCost;
		card.attacks = req.body.attacks;

		await validateOrReject(card);

		const cardAttributesErrorValidation = await cardAttributesErrorValidations(card);
		if (cardAttributesErrorValidation?.message)
			res.status(400).send({
				message: cardAttributesErrorValidation.message,
			});

		const cardAttacksErrorValidation = await cardAttacksErrorValidations(req, card);
		if (cardAttacksErrorValidation?.message)
			res.status(400).send({
				message: cardAttacksErrorValidation.message,
			});

		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};
