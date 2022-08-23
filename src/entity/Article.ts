import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'title', comment: '标题' })
  title: string;

  @Column({ type: 'varchar', name: 'content', comment: '内容' })
  content: string;

  @Column({ type: 'varchar', name: 'author', comment: '作者' })
  author: string;

  @CreateDateColumn({ name: 'create_time' })
  createTime!: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime!: Date;
}
