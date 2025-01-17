const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    }
})

const user = new mongoose.model("user", UserSchema);

module.exports = user;