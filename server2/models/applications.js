const mongoose = require('mongoose')

const applicationsSchema= new mongoose.Schema({
    applicant_email:String,
    listing_id:{type:String, default:''},

},{timestamps: true})

module.exports=mongoose.model("applications", applicationsSchema)