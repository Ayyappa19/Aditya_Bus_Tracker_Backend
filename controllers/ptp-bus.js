var express = require('express')
const pbm = require('../model/ptp-bus-model')

const ptpBuses = async (req,res) =>{
    const data = pbm.find()
    .then(suc =>{
        return res.status(200).json(suc);
    })
    .catch(err=>{
        return res.status(500).json(err);
    })
    // console.log(data)
}


exports.ptpBuses = ptpBuses;