var express = require('express')
const kbm = require('../model/kkd-bus-model')

const kkdBuses = async (req,res) =>{
    const data = kbm.find()
    .then(suc =>{
        return res.status(200).json(suc);
    })
    .catch(err=>{
        return res.status(500).json(err);
    })
    // console.log(data)
}



exports.kkdBuses = kkdBuses;