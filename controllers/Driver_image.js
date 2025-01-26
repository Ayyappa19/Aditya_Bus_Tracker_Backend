const express= require("express")
const multer=require("multer")
const path = require("path")

const Driver_Img_Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images/DriverImage")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const Driver_Filter=(req,file,cb)=>{
    const filetype= /jpeg|jpg|png|webp/
    const exttype=filetype.test(path.extname(file.originalname))
    if(exttype){
        cb(null,true)
    }
    else{
        cb("Error: Only jpg, jpeg,webp and png format allowed!")
    }
}
const Driver_upload=multer({
    storage:Driver_Img_Storage,
    fileFilter:Driver_Filter,
    limits:{
        fileSize:20000000
    }
}).single("file")

const Driver_Image_Upload=(req,res)=>{
    Driver_upload(req,res,(err)=>{
        if(err) return res.status(400).json(err)
            else return res.status(200).json("uploaded")
    })

}
exports.Driver_Image_Upload=Driver_Image_Upload;