import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Article } from '../entity/Article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly ArticleRepository: Repository<Article>,
  ) {}

  /**
   *  获取文章列表
   */
  findList(): Promise<Article[]> {
    return this.ArticleRepository.find();
  }

  Add_article(article1: any): Promise<InsertResult> {
    const ad_Article = new Article();
    ad_Article.title = article1.title;
    ad_Article.content = article1.content;
    ad_Article.category = article1.category;
    ad_Article.author = article1.author;
    ad_Article.tag = article1.tag;
    return this.ArticleRepository.insert(ad_Article);
    // return '添加成功';
  }
}
