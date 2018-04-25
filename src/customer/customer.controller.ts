
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    findAll(): Promise<Array<Customer>> {
        return this.customerService.findAll();
    }

    @Post()
    create(@Body() customer: Customer): Promise<Customer> {
        return this.customerService.create(customer);
    }
}