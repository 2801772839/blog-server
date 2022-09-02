import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from '../entity/Article';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/list')
  async articleList() {
    return await this.articleService.findList();
  }

  @Post('/add')
  async addArticle(@Body() req: any) {
    const { title, content, category, author, tag } = req;
    const result: any = await this.articleService.Add_article({
      title,
      content,
      category,
      author,
      tag,
    });
    return {
      id: result.id,
      title: result.title,
      content: result.content,
      category: result.category,
      author: result.author,
      tag: result.tag,
      status: 200,
    };
  }
}
