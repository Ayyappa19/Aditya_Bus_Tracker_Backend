const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bus_data = require("../model/Driver_DetailsSchema");

// Ensure upload directory exists
const uploadPath = "public/images/DriverImage";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const Driver_Img_Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const Driver_Filter = (req, file, cb) => {
  const filetype = /jpeg|jpg|png|webp/;
  const exttype = filetype.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetype.test(file.mimetype);
  if (exttype && mimetype) {
    cb(null, true);
  } else {
    cb("Error: Only jpg, jpeg, webp, and png formats are allowed!");
  }
};

const Driver_upload = multer({
  storage: Driver_Img_Storage,
  fileFilter: Driver_Filter,
}).single("driverImage");

const Driver_Data_add = async (req, res) => {
  Driver_upload(req, res, async (err) => {
    if (err) {
      console.error("File upload error:", err);
      return res.status(400).json({ error: err });
    }

    const data = req.body;

    // Check if file is uploaded and add its path to data
    if (req.file) {
      data.driverImage = `public/images/DriverImage/${req.file.filename}`;
    } else {
      console.warn("No file uploaded.");
    }

    console.log("Data to be inserted:", data);

    try {
      const result = await bus_data.insertMany(data);
      res.status(201).json(result);
    } catch (err) {
      console.error("Insertion error:", err);
      res.status(500).json({ error: err.message });
    }
  });
};

exports.Driver_Data_add = Driver_Data_add;
