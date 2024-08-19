import { Request } from 'express';
import { Card } from '../src/entities/card';
import { Attack } from '../entities/attack';

declare global {
	namespace Express {
		export interface Request {
			card?: Card;
			attack?: Attack;
			battle?: {
				card1: Card;
				card2: Card;
			};
		}
	}
}
