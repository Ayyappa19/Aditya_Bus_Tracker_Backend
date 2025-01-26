const express=require("express")
const mongoose=require("mongoose")

const Bus_details= new mongoose.Schema({
    busNumber:{
        type:Number
    },
    busRegnNumber:{
        type:String
    },
    driverName:{
        type:String
    },
    typeOfBus:{
        type:String
    },
    seatCapacity:{
        type:Number
    },
    busGround:{
        type:String
    },
    busDestinationStop:{
        type:String
     },
    busImage:{
        type:String
   }
})
module.exports = mongoose.model("Bus_details",Bus_details);