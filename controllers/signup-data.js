const express = require('express')
const lbm = require("../model/login-model")

const signupDataInsertion = async(requ,resp)=>{
    const data = requ.body;
    console.log(requ.body)
    lbm.insertMany(data)
    .then(resu=>{
        return resp.status(201).json("All Records are Added to DB")
    })
    .catch(err=>{
        return resp.status(500).json(err)
    })
}

exports.signupDataInsertion = signupDataInsertion;