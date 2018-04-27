import { BaseEntity, PrimaryGeneratedColumn, Column, BeforeUpdate, ObjectID, ObjectIdColumn, BeforeInsert, Generated, PrimaryColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseDomain extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    deleted: boolean;

    @Column()
    createdAt: Date;

    // @Column()
    // private updatedAt: Date = new Date();

    // @Column()
    // private deletedAt: Date;

    // @Column()
    // private teste = 'Teste';

    // @BeforeUpdate()
    // setDeletedAt(): void {
    //     this.updatedAt = new Date();
    //     if (this.deleted) {
    //         this.deletedAt = new Date();
    //     }
    // }

}