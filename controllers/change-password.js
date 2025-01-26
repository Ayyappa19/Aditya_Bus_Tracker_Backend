const express = require('express')
const ldm = require('../model/login-model')

const changePassword = async(req,res)=>{
    console.log(req.body)
    ldm.findOneAndUpdate({email : req.body.email},{password : req.body.password})
    .then(succ=>{
        return res.status(200).json("Password is Updated")
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
}

exports.changePassword = changePassword;