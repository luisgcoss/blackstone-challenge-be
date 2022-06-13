import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';

@Controller('user/:userId/todos')
export class TodosUserController {
  constructor(private readonly todosService: TodoService) {}

  @Post()
  create(
    @Body() createTodoDto: CreateTodoDto,
    @Param('userId') userId: string,
  ) {
    return this.todosService.create(+userId, createTodoDto);
  }

  @Get()
  findAll(@Param('userId') userId: string) {
    return this.todosService.getManyByUserId(+userId);
  }
}
