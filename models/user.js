const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
}
)

UserSchema.plugin(passportLM)

module.exports = mongoose.model('User', UserSchema)

