const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: [true, 'User already registered']
    },
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    user_type: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);