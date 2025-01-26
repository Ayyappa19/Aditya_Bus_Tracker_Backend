var express = require('express')
const bds = require('../model/bus-data-model')

const busData = async (req,res) =>{
    const data = bds.find()
    .then(suc =>{
        return res.status(200).json(suc);
    })
    .catch(err=>{
        return res.status(500).json(err);
    })
    // console.log(data)
}

exports.busData = busData;