
import { Component } from '@nestjs/common';
import { Customer } from './customer.entity';

@Component()
export class CustomerService {

    async findAll(): Promise<Array<Customer>> {
        return await Customer.find();
    }

    async create(customer: Customer): Promise<Customer> {
        return await Customer.save(customer);
    }
}