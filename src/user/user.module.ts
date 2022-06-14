import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TodoModule } from '../todo/todo.module';
import { UserController } from './user.controller';
import { TodosUserController } from './todos.controller';
import { PrismaService } from '../providers/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    TodoModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5h' },
    }),
  ],
  controllers: [UserController, TodosUserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
