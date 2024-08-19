import { NextFunction, Request, Response } from 'express';
import { CardService } from '../services/card';

export const battleResultValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.body.cardId1 || !req.body.cardId2) return res.status(400).send();

		const { cardId1, cardId2 } = req.body;
		const [card1, card2] = await Promise.all([CardService.getCard(cardId1), CardService.getCard(cardId2)]);
		if (!card1 || !card2) return res.status(400).send();

		req.battle = {
			card1,
			card2,
		};

		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};
