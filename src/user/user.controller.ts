import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Public } from 'src/auth/decorators';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
      const user = await this.userService.create(createUserDto);

      return {
        success: true,
        accesToken: this.jwtService.sign({
          username: user.username,
          sub: user.id,
        }),
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('This username is piked by someone else');
      }
      throw error;
    }
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }
}
