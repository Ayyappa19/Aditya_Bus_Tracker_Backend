const express=require("express")
const mongoose=require("mongoose")
const Feedback_form=new mongoose.Schema({
    date:{
        type:String
    },
    busno:{
        type:String
    },
    rollNumber:{
        type:String
    },
    issueType:{
        type:String
    },
    issue:{
        type:String
    },
    status : {
        type : Boolean
    }
})
module.exports=mongoose.model("Feedback_form",Feedback_form);