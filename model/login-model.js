const express = require('express')
const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    rollNumber : {
        type : String,
    },
    password : {
        type : String,
    },
    email : {
        type : String,
    }
})

module.exports = mongoose.model("loginSchema",loginSchema)