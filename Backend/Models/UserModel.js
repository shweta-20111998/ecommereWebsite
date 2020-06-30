import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required : true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        
    },
    
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }
})

const userModel = mongoose.model("User",userSchema)

export default userModel;