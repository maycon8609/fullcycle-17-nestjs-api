import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService],
})
export class ProductsModule {}
