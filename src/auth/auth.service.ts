import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return { success: true, ...result };
    }
    if (user) {
      return { success: false, message: 'Password incorrect' };
    }
    return { success: false, message: 'User not found' };
  }

  async login(user: any) {
    const paylod = { username: user.username, sub: user.id };

    return {
      accessToken: this.jwtService.sign(paylod),
      userId: user.id,
    };
  }
}
