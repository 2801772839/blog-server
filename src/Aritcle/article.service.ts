import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getHello(): string {
    return '添加文章!';
  }
}
