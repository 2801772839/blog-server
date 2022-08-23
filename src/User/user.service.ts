import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from './Dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  /**
   *
   * @param id 根据id查询对应信息
   */
  async findOne(id: number) {
    return await this.UserRepository.findBy({ id });
  }
  async findUser(username: string) {
    await this.UserRepository.query(
      `select * from user where username=${username}`,
    );
    Logger.log(`${username}`);
    return false;
  }

  async create(createUserDto: CreateUserDto): Promise<string> {
    await this.UserRepository.save(createUserDto);
    return '用户创建成功';
  }

  // 删除
  async delete(ids: any): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(ids)}`);
    try {
      const a = await this.UserRepository.delete(ids.id);
      Logger.log(`删除返回数据：${JSON.stringify(a)}`);
      return a.affected != 0;
    } catch (error) {
      Logger.log(`报错：${JSON.stringify(error)}`);
      return false;
    }
  }

  async finAll() {
    return await this.UserRepository.find();
  }
}
