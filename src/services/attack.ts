import { Attack } from '../entities/attack';

export const AttackService = {
	getAllAttacks: async (filters: { skip?: number; take?: number }) => {
		const { skip = 0, take = 5 } = filters;
		const [Attacks, count] = await Attack.findAndCount({
			order: { name: 'DESC' },
			skip,
			take,
		});

		return {
			Attacks,
			totalCount: count,
		};
	},

	getAttack: async (id: string) => {
		const attack = await Attack.findOneBy({ id });
		return attack;
	},

	createAttack: async (attack: Attack) => {
		const newAttack = await Attack.save(attack);
		return newAttack;
	},

	updateAttack: async (attack: Partial<Attack>) => {
		const updatedAttack = await Attack.save(attack);
		return updatedAttack;
	},

	deleteAttack: async (id: string) => {
		await Attack.delete(id);
		return true;
	},
};
