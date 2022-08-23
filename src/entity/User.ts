import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: number;

  @Column()
  password: number;

  @Column()
  nickname: string;

  @Column()
  phone: number;
}
