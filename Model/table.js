const mongoose = require('mongoose');

const { Schema } = mongoose;

const tableSchema = new Schema({

    label: {

        type: String,
        required: true,
        // unique:true

    },

    available: {

        type: Boolean,

        default:true

    },

    chairs: [{

        type: Schema.Types.ObjectId,

        ref: "Chairs"

    }]

},
    {
        timestamps: true
    }
);

exports.Table = mongoose.model('Table', tableSchema);