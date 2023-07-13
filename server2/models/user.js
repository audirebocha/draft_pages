const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    verified:{type:Boolean, default:false},
    reset_code:{type: String , default: null},
    reset_code_timestamp:{type:Date,default:null}

},{timestamps: true})

module.exports=mongoose.model("user", userSchema)