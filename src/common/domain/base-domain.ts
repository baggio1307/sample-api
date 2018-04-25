import { BaseEntity, PrimaryGeneratedColumn, Column, BeforeUpdate, ObjectID, ObjectIdColumn, BeforeInsert, Generated, PrimaryColumn } from 'typeorm';

export abstract class BaseDomain extends BaseEntity {

    @PrimaryGeneratedColumn()
    private uuid: number;

    @Column({ default: false })
    private deleted: boolean;

    @Column()
    private createdAt: Date = new Date();

    @Column()
    private updatedAt: Date = new Date();

    @Column()
    private deletedAt: Date;

    @Column()
    private teste = 'Teste';

    @BeforeUpdate()
    setDeletedAt(): void {
        this.updatedAt = new Date();
        if (this.deleted) {
            this.deletedAt = new Date();
        }
    }

    @BeforeInsert()
    setCreatedAt(): void {
        console.log('Inseriu!!!!!', JSON.stringify(this));
        this.createdAt = new Date();
    }

}