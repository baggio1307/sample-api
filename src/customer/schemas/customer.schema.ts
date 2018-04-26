import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

export const CustomerSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v4(),
    },
    name: String,
    deleted: {
        default: false,
        type: Boolean,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
        timestamps: true,
    });