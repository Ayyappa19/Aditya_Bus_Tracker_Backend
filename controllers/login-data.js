const express = require('express')
const ldm = require("../model/login-model")

const loginData = async(req,res)=>{
    ldm.find()
    .then(result=>{
        return res.status(200).json(result)
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
}

const checkUserData = async(reque,resp)=>{
    ldm.find({username:reque.body.username,password:reque.body.password})
    .then(succ=>{
        if (succ.length >= 1){
            return resp.status(200).json(true)
        }
        else{
            return resp.status(200).json(false)
        }
    })
    .catch(err=>{
        return resp.status(500).json(err)
    })
}

exports.loginData = loginData;
exports.checkUserData = checkUserData;