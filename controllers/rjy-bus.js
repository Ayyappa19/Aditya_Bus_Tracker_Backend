var express = require('express')
const rbm = require('../model/rjy-bus-model')

const rjyBuses = async (req,res) =>{
    const data = rbm.find()
    .then(suc =>{
        return res.status(200).json(suc);
    })
    .catch(err=>{
        return res.status(500).json(err);
    })
}

exports.rjyBuses = rjyBuses;
