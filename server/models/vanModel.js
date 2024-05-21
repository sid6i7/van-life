const mongoose = require('mongoose');

const vanSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Please provide id']
    },
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    price: {
        type: Number,
        required: [true, 'Please provide price']
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please provide image URL']
    },
    type: {
        type: String,
        required: [true, 'Please provide van type']
    },
    hostId: {
        type: Number,
        required: [true, 'Please provide host ID']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Van", vanSchema);