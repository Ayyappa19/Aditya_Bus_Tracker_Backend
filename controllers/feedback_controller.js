const express=require('express')
const userdt=require("../model/ti_model")


const FeedbackData = async(req,res)=>{
    console.log(req.body)
    var data=req.body
    userdt.insertMany(data)
    .then(succ=>{
        return res.status(201).json("Data Added Successfully")
    })
    .catch(err=>{
        return res.status(500).json(err)
    })
}
exports.FeedbackData=FeedbackData;