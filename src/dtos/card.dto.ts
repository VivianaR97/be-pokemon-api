import {
	Length,
	IsNotEmpty,
	IsOptional,
	IsNumber,
	IsEnum,
	Min,
	Max,
	IsArray,
	ArrayMinSize,
	ArrayMaxSize,
	IsUUID,
} from 'class-validator';
import { CardType, CardRarity } from '../model';

export class GetCardValidationSchema {
	@IsNotEmpty()
	@IsUUID()
	id: string;
}

export class CreateCardValidationSchema {
	@IsNotEmpty()
	@Length(1, 50)
	name: string;

	@IsNotEmpty()
	@IsEnum(CardType)
	type: CardType;

	@IsNotEmpty()
	@IsEnum(CardRarity)
	rarity: CardRarity;

	@IsNumber()
	@Min(10)
	@Max(500)
	hp: number;

	@IsEnum(CardType)
	@IsOptional()
	weaknessType: CardType | null;

	@IsNumber()
	@IsOptional()
	@Min(2)
	@Max(5)
	weaknessMultiplier: number | null;

	@IsEnum(CardType)
	@IsOptional()
	resistanceType: CardType | null;

	@IsNumber()
	@IsOptional()
	@Min(1)
	@Max(100)
	resistanceAmount: number | null;

	@IsOptional()
	ability: string | null;

	@IsNumber()
	@Min(1)
	@Max(3)
	retreatCost: number;

	@IsArray()
	@IsUUID(undefined, { each: true })
	@ArrayMinSize(1)
	@ArrayMaxSize(2)
	attacks: string[];
}

export class UpdateCardValidationSchema extends CreateCardValidationSchema {
	@IsOptional()
	@Length(1, 50)
	name: string;

	@IsOptional()
	@IsEnum(CardType)
	type: CardType;

	@IsOptional()
	@IsEnum(CardRarity)
	rarity: CardRarity;

	@IsOptional()
	@IsNumber()
	@Min(10)
	@Max(500)
	hp: number;

	@IsOptional()
	@IsNumber()
	@Min(1)
	@Max(3)
	retreatCost: number;

	@IsOptional()
	@IsArray()
	@ArrayMinSize(1)
	@ArrayMaxSize(2)
	attacks: string[];
}
