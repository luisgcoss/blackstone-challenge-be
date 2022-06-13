import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
}
