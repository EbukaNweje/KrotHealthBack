const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please full name is required"],
    },
    // lastName: {
    //     type: String,
    //     required: [true, "Please Name field is required"],
    // }, 
    email: {
        type: String,
        required: [true, "Please Email is required"],
    },
    message: {
        type: String,
        required: [true, "Please type in your message"],
    }


}, {timestamps: true});

const contactModel = mongoose.model('Messages', userSchema);

module.exports = contactModel;