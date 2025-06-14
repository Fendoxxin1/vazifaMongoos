import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpPost()
  create(@Body('name') name: string) {
    return this.userService.create(name);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('name') name: string) {
    return this.userService.update(id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
