import { Router } from 'express';
import { cardRouter } from '../routes/card';
import { battleRouter } from '../routes/battle';
import { attackRouter } from '../routes/attack';

const router = Router();
router.use('/v1/card', cardRouter);
router.use('/v1/attack', attackRouter);
router.use('/v1/battle', battleRouter);

export default router;
