import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TodoModule } from 'src/todo/todo.module';
import { UserController } from './user.controller';
import { TodosUserController } from './todos.controller';

@Module({
  imports: [TodoModule],
  controllers: [UserController, TodosUserController],
  providers: [UserService],
})
export class UserModule {}
