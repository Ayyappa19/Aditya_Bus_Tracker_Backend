const express = require('express')
const mongoose = require('mongoose')
const busDetails = mongoose.Schema({
    busNumber : {
        type : Number,
        required : true,
    },
    busLatitude : {
        type : String,
        required : true,
    },
    busLongitude : {
        type : String,
        required : true,
    },
    updatedAt : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("busDetails",busDetails)