const express = require('express')
const mongoose = require('mongoose')

const ptpBusSchema = new mongoose.Schema({
    driver_name : {
        type : String,
    },
    bus_number : {
        type : String,
    },
    bus_ground: {
        type : String,
    },
})

module.exports = mongoose.model("ptpBusSchema",ptpBusSchema)