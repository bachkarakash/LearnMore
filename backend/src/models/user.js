const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { response } = require('express');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        reuired: true
    },
    role: {
        type: String,
        required: true,
        default: "Reader"
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password,10);
    }
    next();
})

userSchema.methods.getToken = async function() {

    try {
        const token  = jwt.sign( { _id: this._id }, process.env.TOKEN_KEY);
        console.log(`inside getToke: ${token}`);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch(error) {
        return response.status(500).json({error:error});
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;