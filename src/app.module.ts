import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [AppController],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [Product],
      synchronize: true,
      logging: true,
    }),
    OrdersModule,
    ProductsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
