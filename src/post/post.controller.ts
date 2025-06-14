import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpPost()
  create(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('author') author: string,
  ) {
    return this.postService.create(title, content, author);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.postService.update(id, title, content);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
