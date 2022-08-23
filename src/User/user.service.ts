import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return '添加用户!';
  }
}
