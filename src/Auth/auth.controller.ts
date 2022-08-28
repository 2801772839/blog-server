import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('权限管理')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('checkUser')
  async checkUser(@Request() req: any) {
    const { username, password } = req.query;
    const result: any = await this.authService.checkUser({
      username,
      password,
    });
    if (!result) {
      throw new HttpException('用户验证失败', HttpStatus.UNAUTHORIZED);
    }

    return {
      username: result.username,
      nickname: result.nickname,
      status: 200,
    };
  }

  @Get('register')
  async register(@Request() req: any) {
    console.log(req.query);
    const { username, password } = req.query;
    const result: any = await this.authService.register({
      username,
      password,
    });
    return result;
  }
}
