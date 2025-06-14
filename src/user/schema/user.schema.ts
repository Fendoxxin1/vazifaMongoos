
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class User extends Document {
  @Prop({ required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
});
