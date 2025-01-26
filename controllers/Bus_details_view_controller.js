const express=require("express");
const view_bus_details=require("../model/Bus_detailsSchema")

const Bus_details_view= async(req,res)=>{
    return (res.json(await view_bus_details.find({}))) 
}
exports.Bus_details_view = Bus_details_view;