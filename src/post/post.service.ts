import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  create(title: string, content: string, author: string) {
    return this.postModel.create({
      title,
      content,
      author: new Types.ObjectId(author),
    });
  }

  findAll() {
    return this.postModel.find().populate('author');
  }

  findOne(id: string) {
    return this.postModel.findById(id).populate('author');
  }

  update(id: string, title: string, content: string) {
    return this.postModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );
  }

  remove(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
