import { Entity, PrimaryColumn, JoinTable, Column, BaseEntity, ManyToMany } from 'typeorm';
import { Card } from '../entities/card';

@Entity()
export class Attack extends BaseEntity {
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column('varchar', { nullable: true })
	description: string | null;

	@Column('int', { nullable: true })
	value: number | null;

	@ManyToMany(() => Card, (card) => card.attacks)
	@JoinTable({ name: 'card_attack' })
	cards: Card[];
}
