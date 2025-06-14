import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://fendoxxin:butcherperfect@cluster0.tbpz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
