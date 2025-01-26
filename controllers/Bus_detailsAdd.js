const express = require("express");
const multer = require("multer");
const path = require("path");
const bus_data = require("../model/Bus_detailsSchema");


const Busimg_storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images/BusImages"); 
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); 
    }
});


const Busimg_Filter = (req, file, cb) => {
    const filetype = /jpeg|jpg|png|webp/; 
    const exttype = filetype.test(path.extname(file.originalname).toLowerCase());
    if (exttype) {
        cb(null, true); 
    } else {
        cb("Error: Only jpg, jpeg, webp, and png format allowed!"); 
    }
};

const Busimg_upload = multer({
    storage: Busimg_storage,
    fileFilter: Busimg_Filter,
    limits: {
        fileSize: 80000000 
    }
}).single('busImage'); 

const Bus_Data_add = async (req, res) => {
    Busimg_upload(req, res, async (err) => {
        if (err) {
            console.log("Error during upload:", err);
            return res.status(400).json(err);
        }

        const data = req.body; 

        if (req.file) {
            data.busImage = `public/images/BusImages/${req.file.originalname}`; 
        }

        console.log(data); 

        try {
            const result = await bus_data.insertMany(data); 
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
};

exports.Bus_Data_add = Bus_Data_add;
