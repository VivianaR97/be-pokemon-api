import Router from 'express';
import { AttackService } from '../services/attack';
import { createAttackValidator, getAttackValidator, updateAttackValidator } from '../middlewares/attack.validation';

const router = Router();

router.get('/', async (req, res) => {
	const attacks = await AttackService.getAllAttacks(req.query);
	return res.status(200).send(attacks);
});

router.get('/:id', getAttackValidator, async (req, res) => {
	const attack = await AttackService.getAttack(req.params.id);
	if (!attack) return res.status(404).send();
	return res.status(200).send(attack);
});

router.post('/', createAttackValidator, async (req, res) => {
	const attack = await AttackService.createAttack(req.body);
	return res.status(200).send(attack);
});

router.patch('/', updateAttackValidator, async (req, res) => {
	const attack = await AttackService.updateAttack(req.body);
	return res.status(200).send(attack);
});

router.delete('/:id', getAttackValidator, async (req, res) => {
	const attack = await AttackService.getAttack(req.params.id);
	if (!attack) return res.status(404).send();

	await AttackService.deleteAttack(req.params.id);
	return res.status(202).send();
});

export const attackRouter = router;
