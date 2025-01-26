const express = require('express');
const Bus_Detc = require("../controllers/Bus_detailsAdd");
const Driver_Detc=require("../controllers/Driver_detailsAdd")
const Bus_view=require("../controllers/Bus_details_view_controller")
const Driver_view=require("../controllers/Driver_details_view_controller")
const Route = express.Router();

Route.post('/add-bus-details', Bus_Detc.Bus_Data_add);
Route.post('/add-driver-details',Driver_Detc.Driver_Data_add);
Route.get("/get-bus-details",Bus_view.Bus_details_view);
Route.get("/get-driver-details",Driver_view.Driver_details_view)
// Route.post("/bus-image-upload",Bus_Img.Bus_ImageUpload);
// Route.post("/driver-image-upload",Driver_Img.Driver_Image_Upload);

module.exports = Route;
