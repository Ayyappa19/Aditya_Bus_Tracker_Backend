const express = require('express')
const tm = require("../model/ti_model")

const getFeedData = async(req,res)=>{
    tm.find()
    .then(suc=>{
        return res.status(200).json(suc)
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
}

exports.getFeedData = getFeedData;