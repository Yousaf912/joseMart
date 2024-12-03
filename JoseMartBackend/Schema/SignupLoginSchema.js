const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be atleast 3 character long'],
        maxlength: [25, 'Name cannot be 10 cracter long']
    },
    mail: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'please provide valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        // match: [
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
        // ]
    },
    number:{
        type:String,
        required:[true,'number is required'],
        minlength:[12,'number must be 12 cracter long']
    }

})

const User = mongoose.model("User",SignUpSchema);
module.exports = User;
