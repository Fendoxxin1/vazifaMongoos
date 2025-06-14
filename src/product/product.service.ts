import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  create(name: string, category: string) {
    return this.productModel.create({
      name,
      category: new Types.ObjectId(category),
    });
  }

  findAll() {
    return this.productModel.find().populate('category');
  }

  findOne(id: string) {
    return this.productModel.findById(id).populate('category');
  }

  update(id: string, name: string) {
    return this.productModel.findByIdAndUpdate(id, { name }, { new: true });
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
