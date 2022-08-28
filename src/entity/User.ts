import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcryptjs from 'bcrypt';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'username', comment: '用户名' })
  username: string;

  @Column({ type: 'varchar', name: 'nickname', comment: '昵称' })
  nickname: string;

  @Column({ type: 'varchar', name: 'password', comment: '密码' })
  password: string;

  @Column({ type: 'varchar', name: 'phone', comment: '手机号' })
  phone: number;
  @Column({ type: 'varchar', name: 'phone', comment: '校验' })
  token: string;

  @BeforeInsert()
  async encryptPwd() {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
}
