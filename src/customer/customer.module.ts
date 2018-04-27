import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerSchema } from './schemas/customer.schema';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])],
    components: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule { }