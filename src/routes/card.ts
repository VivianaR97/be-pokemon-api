import Router from 'express';
import { createCardValidator, getCardValidator, updateCardValidator } from '../middlewares/card.validation';
import { CardService } from '../services/card';

const router = Router();

router.get('/', async (req, res) => {
	const cards = await CardService.getAllCards(req.query);
	return res.status(200).send(cards);
});

router.get('/:id', getCardValidator, async (req, res) => {
	const { card } = req;
	return res.status(200).send(card!);
});

router.get('/:id/cardsToBattle', getCardValidator, async (req, res) => {
	const cardsToBattle = await CardService.getCardsToBattle(req.card!.id);
	if (!cardsToBattle) return res.status(404).send();
	return res.status(200).send(cardsToBattle);
});

router.get('/:id/attributes', getCardValidator, async (req, res) => {
	const card = await CardService.getCardAttributes(req.card!);
	if (!card) return res.status(404).send();
	return res.status(200).send(card);
});

router.post('/', createCardValidator, async (req, res) => {
	const card = await CardService.createCard(req.body);
	return res.status(200).send(card);
});

router.patch('/', updateCardValidator, async (req, res) => {
	const card = await CardService.updateCard(req.body);
	return res.status(200).send(card);
});

router.delete('/:id', getCardValidator, async (req, res) => {
	await CardService.deleteCard(req.card!.id);
	return res.status(202).send();
});

export const cardRouter = router;
