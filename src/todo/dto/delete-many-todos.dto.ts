import { IsArray, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class DeleteManyTodosDto {
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  @IsPositive({ each: true })
  todos: number[];
}
