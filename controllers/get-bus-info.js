const express = require('express')
const dev = require('../model/devmodel')

const getBusInfo = async(req,res)=>{
    dev.find()
    .then(suc=>{
        return res.status(200).json(suc)
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
}

exports.getBusInfo = getBusInfo;