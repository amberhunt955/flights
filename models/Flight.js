const mongoose = require('mongoose');

// Create the schema
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
},
{timestamps: true}
)

// Create and export the model
const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight;