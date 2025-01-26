const express=require("express");
const view_driver_details=require("../model/Driver_DetailsSchema")

const Driver_details_view= async(req,res)=>{
    return (res.json(await view_driver_details.find({}))) 
}
exports.Driver_details_view = Driver_details_view;