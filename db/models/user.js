const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;