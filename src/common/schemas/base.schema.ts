import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import * as util from 'util';

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

// const BaseSchema = (args) => {
//     mongoose.Schema.apply(this, arguments);
//     this.add({
//             id: {
//                 type: String,
//                 default: uuid.v4(),
//             },
//             deleted: {
//                 default: false,
//                 type: Boolean,
//             },
//             deletedAt: {
//                 type: Date,
//                 default: null,
//             },
//         });
// };
// util.inherits(BaseSchema, mongoose.Schema);

// export default BaseSchema;
