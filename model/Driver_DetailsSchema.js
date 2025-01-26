const express=require("express")
const mongoose=require("mongoose")

const Driver_details= new mongoose.Schema({
    busNumber:{
        type:Number
    },
    driverName:{
        type:String
    },
    driverNumber:{
        type:Number
    },
    driverHomeTown:{
        type:String
    },
    driverLicense:{
        type:String
    },
    driverAge:{
        type:String
     },
    driverImage:{
        type:String
   }
})
module.exports = mongoose.model("Driver_details",Driver_details);