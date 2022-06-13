import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TodoModule } from 'src/todo/todo.module';
import { UserModule } from 'src/user/user.module';
import { PrismaService } from 'src/providers/prisma.service';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
