const mongoose = require('mongoose');

const { Schema } = mongoose;

const ownerSchema = new Schema({

    numberOfTable: {

        type: Number,
        required: true

    },

    chairPerTable: {

        type: Number,
        required: true,
        
    }

},
    {
        timestamps: true
    }
);

exports.Owner = mongoose.model('Owner', ownerSchema);