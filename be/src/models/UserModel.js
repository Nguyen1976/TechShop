const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
        phone: {type: String, required: true},
        address: {type: String},
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