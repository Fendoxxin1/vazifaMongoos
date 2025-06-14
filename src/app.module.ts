import { Module } from '@nestjs/common';
import { ProductModule } from './product/post.module';
import { CategoryModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://fendoxxin:butcherperfect@cluster0.tbpz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
