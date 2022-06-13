import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TodoModule } from 'src/todo/todo.module';
import { UserController } from './user.controller';
import { TodosUserController } from './todos.controller';
import { PrismaService } from '../providers/prisma.service';

@Module({
  imports: [TodoModule],
  controllers: [UserController, TodosUserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
