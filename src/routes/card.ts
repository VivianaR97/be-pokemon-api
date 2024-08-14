import Router from 'express';
import { CardService } from '../services/card';
import { createCardValidator, getCardValidator, updateCardValidator } from '../middlewares/card.validation';

const router = Router();

router.get('/', async (req, res) => {
	const cards = await CardService.getAllCards(req.query);
	return res.status(200).send(cards);
});

router.get('/:id', getCardValidator, async (req, res) => {
	const card = await CardService.getCard(req.params.id);
	if (!card) return res.status(404).send();
	return res.status(200).send(card);
});

router.get('/:id/attributes', getCardValidator, async (req, res) => {
	const card = await CardService.getCardAttributes(req.params.id);
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
	const card = await CardService.getCard(req.params.id);
	if (!card) return res.status(404).send();

	await CardService.deleteCard(req.params.id);
	return res.status(202).send();
});

export const cardRouter = router;
