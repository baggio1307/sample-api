import { Document } from 'mongoose';

export interface Customer extends Document {
    id: string;
    name: string;
    deleted: boolean;
    deletedAt: Date;
    updatedAt: Date;
    createdAt: Date;
}