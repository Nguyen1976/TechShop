const mongoose = require('mongoose');
const AddressModel = require('./AddressModel');

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        fullName: {type: String},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
        phone: {type: String},
        avatar: {type: String},
        access_token: { type: String, required: false },
        refresh_token: { type: String, required: false },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;