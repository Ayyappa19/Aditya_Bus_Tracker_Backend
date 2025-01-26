var express = require('express')
const Route = express.Router();
const busDataController = require("../controllers/bus-data");
const kkdBusesController = require('../controllers/kkd-bus')
const ptpBusesController = require('../controllers/ptp-bus')
const rjyBusesController = require('../controllers/rjy-bus')
const loginDataController = require("../controllers/login-data")
const mailSenderController = require("../controllers/send-mail")
const signupDataInsertionController = require("../controllers/signup-data")
const getBusInfoController = require('../controllers/get-bus-info')
const checkingMailController = require('../controllers/check-mail')
const changePasswordController = require('../controllers/change-password')
const WholeCntrl = require('../controllers/feedback_controller')
const feedBackController = require('../controllers/feed-get-data')
const Bus_Detc = require("../controllers/Bus_detailsAdd");
const Driver_Detc=require("../controllers/Driver_detailsAdd")
const Bus_view=require("../controllers/Bus_details_view_controller")
const Driver_view=require("../controllers/Driver_details_view_controller")


Route.get("/bus-data",busDataController.busData)
Route.get("/kkd-bus-data",kkdBusesController.kkdBuses)
Route.get("/ptp-bus-data",ptpBusesController.ptpBuses)
Route.get("/rjy-bus-data",rjyBusesController.rjyBuses)
Route.get("/login-data",loginDataController.loginData)
Route.post("/check-user-data",loginDataController.checkUserData)
Route.post("/send-mail",mailSenderController.mailSender)
Route.get("/otp-validation",mailSenderController.otpValidation)
Route.post("/signup-data-insertion",signupDataInsertionController.signupDataInsertion)
Route.get("/get-bus-info",getBusInfoController.getBusInfo)
Route.post("/check-mail",checkingMailController.checkingMail)
Route.post("/change-password",changePasswordController.changePassword)
Route.post("/feedback",WholeCntrl.FeedbackData)
Route.get("/feed-get-data",feedBackController.getFeedData)
Route.post('/add-bus-details', Bus_Detc.Bus_Data_add);
Route.post('/add-driver-details',Driver_Detc.Driver_Data_add);
Route.get("/get-bus-details",Bus_view.Bus_details_view);
Route.get("/get-driver-details",Driver_view.Driver_details_view)


module.exports = Route;