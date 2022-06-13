import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class UpdateManyTodosDto {
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  @IsPositive({ each: true })
  todos: number[];

  @IsNotEmpty()
  @IsBoolean()
  isMarkedAsDone: boolean;
}
