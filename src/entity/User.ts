import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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

  @Column({
    type: 'varchar',
    name: 'salt',
    comment: '密码盐',
    default: 'anysg',
  })
  salt!: string;
}
