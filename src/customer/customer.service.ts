import { Customer } from './interfaces/customer.interface';

import { Component } from '@nestjs/common';
import { CustomerSchema } from './schemas/customer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class CustomerService {

    constructor(@InjectModel(CustomerSchema) private readonly customerModel: Model<Customer>) {}

    async findAll(): Promise<Array<Customer>> {
        return await this.customerModel.find();
    }

    async create(customer: Customer): Promise<Customer> {
        const create = new this.customerModel(customer);
        return await create.save();
    }
}