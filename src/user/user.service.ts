// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  create(name: string) {
    return this.model.create({ name });
  }

  findAll() {
    return this.model.find().populate('posts');
  }

  findOne(id: string) {
    return this.model.findById(id).populate('posts');
  }

  // Userni yangilash
  update(id: string, name: string) {
    return this.model.findByIdAndUpdate(id, { name }, { new: true });
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
