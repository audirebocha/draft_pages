
//import { Schema, model,  } from "mongoose";
const mongoose = require('mongoose')


const listingSchema= new mongoose.Schema({
    place: {
        type: String,
        
        },
        price: {
            type: Number,
            
        },
        desc: {
            type: String,
           
        },
        description: {
            type: String,
            
        },
        image: {
            type: String,
           
        },
       
        gender: {
            type: String,
            
        },
        sublet: {
            type: String,
           
        },
        isPetsAllowed: {
            type: String
        },
        isSmokingAllowed: {
            type: String
        },
        title: {
            type: String,
            
        },
        perks: [{
            type: String,
        }],
        features: [{
            type: String,
        }]
})

module.exports=mongoose.model("listing", listingSchema)

// const ListingSchema = new Schema({
//   place: {
//     type: String,
    
//     },
//     price: {
//         type: Number,
        
//     },
//     desc: {
//         type: String,
       
//     },
//     description: {
//         type: String,
        
//     },
//     image: {
//         type: String,
       
//     },
   
//     gender: {
//         type: String,
        
//     },
//     sublet: {
//         type: String,
       
//     },
//     isPetsAllowed: {
//         type: String
//     },
//     isSmokingAllowed: {
//         type: String
//     },
//     title: {
//         type: String,
        
//     },
//     perks: [{
//         type: String,
//     }],
//     features: [{
//         type: String,
//     }]
// });

//const Listings = model("Listing", ListingSchema);


//export default Listings;
