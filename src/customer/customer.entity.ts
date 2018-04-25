
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { BaseDomain } from 'common/domain/base-domain';

@Entity()
export class Customer extends BaseDomain {

    @Column() name: string;

    @Column() address: string;
}