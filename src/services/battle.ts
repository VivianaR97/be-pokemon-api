import { Card } from '../entities/card';

export const BattleService = {
	getResult: async (battle: { card1: Card; card2: Card }) => {
		const { card1, card2 } = battle;
		const { attacks } = card1;
		const { weaknessType, weaknessMultiplier, resistanceType, resistanceAmount } = card2;

		for (const attack of attacks) {
			let totalAttackValue = attack.value || 0;
			if (weaknessType === card1.type) totalAttackValue = totalAttackValue * weaknessMultiplier!;
			if (resistanceType === card1.type) totalAttackValue = Math.max(totalAttackValue - resistanceAmount!, 0);

			const cardHpResult = card2.hp - totalAttackValue;
			if (cardHpResult <= 0) return true;
		}

		return false;
	},
};
