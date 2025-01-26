const express = require('express')
const ldm = require("../model/login-model")

const checkingMail = async(req,res)=>{
    ldm.find({email : req.body.email})
    .then(succ=>{
        if (succ.length >= 1){
            return res.status(200).json(true)
        }
        else{
            return res.status(200).json(false)
        }
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
}

exports.checkingMail = checkingMail;