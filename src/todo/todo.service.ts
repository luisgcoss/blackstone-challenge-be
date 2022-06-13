import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { DeleteManyTodosDto } from './dto/delete-many-todos.dto';
import { UpdateManyTodosDto } from './dto/update-many-todos.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: { userId, ...createTodoDto },
    });
  }

  getManyByUserId(userId: number) {
    return this.prisma.todo.findMany({ where: { userId } });
  }

  updateMany(updateManyTodosDto: UpdateManyTodosDto) {
    const { todos, ...rest } = updateManyTodosDto;
    return this.prisma.todo.updateMany({
      where: { id: { in: todos } },
      data: rest,
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data: updateTodoDto });
  }

  removeMany(deleteManyTodosDto: DeleteManyTodosDto) {
    return this.prisma.todo.deleteMany({
      where: { id: { in: deleteManyTodosDto.todos } },
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
