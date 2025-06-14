import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class Category extends Document {
  @Prop({ required: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'category',
});
