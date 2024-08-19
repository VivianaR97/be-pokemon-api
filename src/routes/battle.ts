import Router from 'express';
import { battleResultValidator } from '../middlewares/battle.validation';
import { BattleService } from '../services/battle';

const router = Router();

router.post('/', battleResultValidator, async (req, res) => {
	const cards = await BattleService.getResult(req.battle!);
	return res.status(200).send(cards);
});

export const battleRouter = router;
