const express=require("express")
const multer=require("multer")
const path=require("path")

const Busimg_storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/images/BusImages")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const Busimg_Filter=(req,file,cb)=>{
    const filetype=/jpeg|jpg|png|webp/
    const exttype=filetype.test(path.extname(file.originalname))
    if(exttype){
        cb(null,true)
    }
    else{
        cb("Error: Only jpg, jpeg,webp and png format allowed!")
    }
}

const Busimg_upload = multer({
    storage: Busimg_storage,
    fileFilter: Busimg_Filter,
    limits: {
        fileSize: 3000000
    }
}).single('file');

const Bus_ImageUpload =(req,res)=>{
    Busimg_upload(req,res,(err)=>{
        if(err){
            // console.log(err)
            return res.status(400).json(err)
            
        } 
            
            else
            {
                // console.log(req)
                return res.status(200).json("uploaded")
            } 
    })
}

exports.Bus_ImageUpload=Bus_ImageUpload;
