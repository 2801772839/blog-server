import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { InsertResult, Repository } from 'typeorm';

export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly AuthRepository: Repository<User>,
  ) {}

  checkUser(user: any): Promise<User> {
    return this.AuthRepository.findOne({
      where: {
        username: user.username,
        password: user.password,
      },
    });
  }

  register(user: any): Promise<InsertResult> {
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = user.password;
    newUser.nickname = user.username;
    newUser.phone = 123456789;
    return this.AuthRepository.insert(newUser);
  }
}
