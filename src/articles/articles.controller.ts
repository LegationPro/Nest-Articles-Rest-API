import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiCreatedResponse({ type: ArticleEntity, isArray: true})
  findAll() {
    return this.articlesService.findAll();
  }

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true})
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({type: ArticleEntity})
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: ArticleEntity})
  update(@Param('id') id: string, updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(Number(id), updateArticleDto);
  }

  @Delete('id')
  @ApiOkResponse({type: ArticleEntity})
  remove(@Param('id') id: string) {
    return this.articlesService.remove(Number(id));
  }
}
