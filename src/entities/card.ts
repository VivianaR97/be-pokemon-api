import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Attack } from '../entities/attack';
import { CardType, CardRarity } from '../model';

@Entity()
export class Card extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column({ enum: CardType })
	type: CardType;

	@Column({ enum: CardRarity })
	rarity: CardRarity;

	@Column()
	hp: number;

	@Column('enum', { enum: CardType, nullable: true })
	weaknessType: CardType | null;

	@Column('float', { nullable: true })
	weaknessMultiplier: number | null;

	@Column('enum', { enum: CardType, nullable: true })
	resistanceType: CardType | null;

	@Column('int', { nullable: true })
	resistanceAmount: number | null;

	@Column({ type: 'varchar', nullable: true })
	ability: string | null;

	@Column()
	retreatCost: number;

	@ManyToMany(() => Attack, (attack) => attack.cards)
	@JoinTable({ name: 'card_attack' })
	attacks: Attack[];
}
