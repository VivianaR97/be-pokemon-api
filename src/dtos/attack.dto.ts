import { Length, IsNotEmpty, IsOptional, IsNumber, Min, Max, IsUUID } from 'class-validator';

export class GetAttackValidationSchema {
	@IsNotEmpty()
	@IsUUID()
	id: string;
}

export class CreateAttackValidationSchema {
	@IsNotEmpty()
	@Length(1, 50)
	name: string;

	@IsNotEmpty()
	@Length(1, 50)
	description: string;

	@IsNumber()
	@Min(10)
	@Max(120)
	value: number;
}

export class UpdateAttackValidationSchema extends CreateAttackValidationSchema {
	@IsOptional()
	@IsNotEmpty()
	@Length(1, 50)
	name: string;

	@IsOptional()
	@IsNotEmpty()
	@Length(1, 50)
	description: string;

	@IsOptional()
	@IsNumber()
	@Min(10)
	@Max(120)
	value: number;
}
