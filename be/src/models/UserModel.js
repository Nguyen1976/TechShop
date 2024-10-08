const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
        phone: {type: Number, required: true},
        access_token: { type: String, required: true },
        refresh_token: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;