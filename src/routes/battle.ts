import Router from 'express';
import { CardService } from '../services/card';

const router = Router();

router.get('/', async (req, res) => {
	const cards = await CardService.getAllCards(req.query);
	return res.status(200).send(cards);
});

export const battleRouter = router;
