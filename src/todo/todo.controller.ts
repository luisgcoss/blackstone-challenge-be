import { Controller, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UpdateManyTodosDto } from './dto/update-many-todos.dto';
import { DeleteManyTodosDto } from './dto/delete-many-todos.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }

  @Patch()
  updateMany(@Body() updateManyTodosDto: UpdateManyTodosDto) {
    return this.todoService.updateMany(updateManyTodosDto);
  }

  @Delete()
  removeMany(@Body() deleteManyTodosDto: DeleteManyTodosDto) {
    return this.todoService.removeMany(deleteManyTodosDto);
  }
}
