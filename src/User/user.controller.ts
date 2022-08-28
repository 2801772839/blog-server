import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './Dto/createUser.dto';
import { DeleteUserDto } from './Dto/deleteUser.dto';

@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 用户管理-增加用户
   */
  @Post('/add')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   *
   * @param id  根据id查询对应信息
   */
  @Post(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Post(':username')
  findUser(@Param('username') username: string) {
    return this.userService.findUser(String(username));
  }

  /**
   * 查询全部用户
   */
  @Get('list')
  findAll() {
    return this.userService.finAll();
  }

  /**
   * 登录
   */

  /**
   * 用户管理-删除用户
   */
  @Post('/delete')
  deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<boolean> {
    Logger.log(`删除用户接收参数：${JSON.stringify(deleteUserDto)}`);
    return this.userService.delete(deleteUserDto);
  }
}
