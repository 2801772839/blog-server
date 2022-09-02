import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
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

  @Column({ name: 'like_count', comment: '点赞', default: 0 })
  like_count: number;

  @Column({ name: 'read_count', comment: '浏览量', default: 0 })
  read_count: number;

  @Column({ type: 'varchar', name: 'author', comment: '发表用户' })
  author: string;

  @Column({ type: 'varchar', name: 'category', comment: '类别' })
  category: string;

  @Column({ type: 'varchar', name: 'tag', comment: '标签' })
  tag: string;

  @CreateDateColumn({ name: 'create_time' })
  createTime!: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime!: Date;
}
