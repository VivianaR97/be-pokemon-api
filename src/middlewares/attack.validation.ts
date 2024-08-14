import { NextFunction, Request, Response } from 'express';
import { validateOrReject } from 'class-validator';
import {
	CreateAttackValidationSchema,
	GetAttackValidationSchema,
	UpdateAttackValidationSchema,
} from '../dtos/attack.dto';

export const getAttackValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.params.id) return res.status(400).send();

		const attack = new GetAttackValidationSchema();
		attack.id = req.params.id;

		await validateOrReject(attack);

		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};

export const createAttackValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.body) return res.status(400).send();

		const attack = new CreateAttackValidationSchema();
		attack.name = req.body.name;
		attack.description = req.body.description;
		attack.value = req.body.value;

		await validateOrReject(attack);

		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};

export const updateAttackValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.body) return res.status(400).send();

		const attack = new UpdateAttackValidationSchema();
		attack.name = req.body.name;
		attack.description = req.body.description;
		attack.value = req.body.value;

		await validateOrReject(attack);

		next();
	} catch (e: any) {
		const message = Object.values(e[0].constraints)[0];
		res.status(400).send({ message });
	}
};
