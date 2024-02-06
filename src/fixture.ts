import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepository = dataSource.getRepository('Product');
  await productRepository.insert([
    {
      id: '3a4f55fd-2b2d-43b3-90e4-4f715c8d0a1f',
      name: 'Product 1',
      description: 'Description 1',
      price: 101,
      image_url: 'http://localhost:9000/products/01.png',
    },
    {
      id: 'ad2e28d1-4b10-4922-9e3d-d13ee00f9df6',
      name: 'Product 2',
      description: 'Description 2',
      price: 102,
      image_url: 'http://localhost:9000/products/02.png',
    },
    {
      id: 'b1bb3e02-68a1-4aa8-b3b8-2a2d0895ef37',
      name: 'Product 3',
      description: 'Description 3',
      price: 103,
      image_url: 'http://localhost:9000/products/03.png',
    },
    {
      id: 'd14b90ec-7a38-4d47-97c7-1e1d476e72a7',
      name: 'Product 4',
      description: 'Description 4',
      price: 104,
      image_url: 'http://localhost:9000/products/04.png',
    },
    {
      id: 'fdd0480d-1e3b-4f6b-b066-13d6a36e759f',
      name: 'Product 5',
      description: 'Description 5',
      price: 105,
      image_url: 'http://localhost:9000/products/05.png',
    },
    {
      id: '9037eb8b-f014-40f3-af32-ec4ab4d0c507',
      name: 'Product 6',
      description: 'Description 6',
      price: 106,
      image_url: 'http://localhost:9000/products/06.png',
    },
    {
      id: 'f2511d8c-cbc7-4e3b-bc41-005f7f6d92b3',
      name: 'Product 7',
      description: 'Description 7',
      price: 107,
      image_url: 'http://localhost:9000/products/07.png',
    },
    {
      id: '42e472ae-8b2c-4a3e-920f-158f7353666f',
      name: 'Product 8',
      description: 'Description 8',
      price: 108,
      image_url: 'http://localhost:9000/products/08.png',
    },
    {
      id: 'c8d4a9d3-57b7-4772-88ae-2b92e0a1bf69',
      name: 'Product 9',
      description: 'Description 9',
      price: 109,
      image_url: 'http://localhost:9000/products/09.png',
    },
    {
      id: 'a547c22a-7739-4b43-9c3d-25d28e2dfc9e',
      name: 'Product 10',
      description: 'Description 10',
      price: 110,
      image_url: 'http://localhost:9000/products/10.png',
    },
    {
      id: '3d26779c-1d96-4629-8b7d-bf148d9bf935',
      name: 'Product 11',
      description: 'Description 11',
      price: 111,
      image_url: 'http://localhost:9000/products/11.png',
    },
    {
      id: 'b4c8c2ee-8d6e-4856-934f-94b0b76ee4fc',
      name: 'Product 12',
      description: 'Description 12',
      price: 112,
      image_url: 'http://localhost:9000/products/12.png',
    },
    {
      id: '0353d57f-4301-419a-90d6-aaee8d6b51cb',
      name: 'Product 13',
      description: 'Description 13',
      price: 113,
      image_url: 'http://localhost:9000/products/13.png',
    },
    {
      id: '68e1925c-0802-4b0d-99d5-8e17aeeb2a41',
      name: 'Product 14',
      description: 'Description 14',
      price: 114,
      image_url: 'http://localhost:9000/products/14.png',
    },
    {
      id: '37bdaec3-54a7-4f1a-9f88-18f7a7d6f7a6',
      name: 'Product 15',
      description: 'Description 15',
      price: 115,
      image_url: 'http://localhost:9000/products/15.png',
    },
    {
      id: '43b18f19-1d5b-4d3d-9179-9c8c64b60cbf',
      name: 'Product 16',
      description: 'Description 16',
      price: 116,
      image_url: 'http://localhost:9000/products/16.png',
    },
    {
      id: 'd9560d7a-5887-4e4e-bb6b-ced12f8d423b',
      name: 'Product 17',
      description: 'Description 17',
      price: 117,
      image_url: 'http://localhost:9000/products/17.png',
    },
    {
      id: 'd7f17bc9-749a-4e4a-8b45-50e638d00c85',
      name: 'Product 18',
      description: 'Description 18',
      price: 118,
      image_url: 'http://localhost:9000/products/18.png',
    },
    {
      id: 'c5e4f4b0-7350-4181-b896-12ab5dc1d515',
      name: 'Product 19',
      description: 'Description 19',
      price: 119,
      image_url: 'http://localhost:9000/products/19.png',
    },
    {
      id: '86ff4dcf-b61d-45be-90e5-ebbb20a1d9b0',
      name: 'Product 20',
      description: 'Description 20',
      price: 120,
      image_url: 'http://localhost:9000/products/20.png',
    },
  ]);

  await app.close();
}
bootstrap();
