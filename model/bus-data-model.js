const express = require('express')
const mongoose = require('mongoose')

const busDataSchema = new mongoose.Schema({
    driver_name : {
        type : String,
    },
    bus_number : {
        type : String,
    },
    bus_ground: {
        type : String,
    },
    busLatitude: {
        type : String,
    },
    busLongitude : {
        type: String,
    }
})

module.exports = mongoose.model("busDataSchema",busDataSchema)