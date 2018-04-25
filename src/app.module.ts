import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { CustomerModule } from 'customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule],
  controllers: [AppController],
  components: [],
})
export class AppModule { }
