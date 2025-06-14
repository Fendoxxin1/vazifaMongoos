import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schema/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private model: Model<Category>,
  ) {}

  create(name: string) {
    return this.model.create({ name });
  }

  findAll() {
    return this.model.find().populate('products');
  }

  findOne(id: string) {
    return this.model.findById(id).populate('products');
  }

  update(id: string, name: string) {
    return this.model.findByIdAndUpdate(id, { name }, { new: true });
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
