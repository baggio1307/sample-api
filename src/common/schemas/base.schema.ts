import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

export const BaseSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v4(),
    },
    deleted: {
        default: false,
        type: Boolean,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
});