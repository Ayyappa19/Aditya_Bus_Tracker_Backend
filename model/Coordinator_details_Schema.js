const express=require("express")
const mongoose=require("mongoose")

const Coordinator_details=mongoose.Schema({
    coordinatorName:{
        type:String
    },
    coordinatorNumber:{
        type:Number
    },
    coordinatorEmail:{
        type:String
    },
    coordinatorDesignation:{
        type:String
    },
    coordinatorImage:{
        type:String
    },
})

module.exports = mongoose.model("Coordinator_details",Coordinator_details);
