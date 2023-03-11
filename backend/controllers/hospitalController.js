import bcrypt from "bcrypt";
import Hospital from "../models/hospitalSchema.js";
import doctorValidation from '../validation/doctorValidation.js'
import Doctor from "../models/doctorSchema.js";






  
export const getHospitals = async (req, res) => {
  try {
    //get all hospitals in db
    const hospitals = await Hospital.find({});

    res.status(200).json(hospitals);
  } catch (err) {
    res.status(400).json(err);
  }
};



export const getOneHospital = async (req, res) => {
  try {
      //get one particular hospital details using id
     const data = await Hospital.findById(req.params.id);
     res.status(200).json(data)
  } catch (err) {
    res.status(400).json(err);
    
  }
 
};

export const addDoctor = async (req, res, next) => {
 
  const { name, department, days } = req.body;

  // Validate the request body using the doctorValidation function
  const { errors, isValid } = doctorValidation(req.body);

  // If the validation fails, return a 400 Bad Request error with the validation errors
  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    // Check if a doctor already exists
    const doctorExist = await Doctor.findOne({
      name: name,
      department: department,
      hospital: req.hospitalId,
    });

    // If a doctor with the same details exists, return a 400 Bad Request error
    if (doctorExist) {
      return res.status(400).json({ message: "Doctor already exists" });
    }
  } catch (err) {
    
    return next(err);
  }

  try {
    // Set the default image data as an object with the default URL and filename values specified in the doctorSchema
     let image = {
       url: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/06/doctor-writing-notes-clipboard-0624221.jpg",
       filename: "DocsOn/lcst8001000",
     };

    // If a file was uploaded, replace the default image data with the uploaded image data
    if (req.file) {
      image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // Create a new Doctor 
    const newDoctor = new Doctor({
      name,
      department,
      availableDays: days,
      hospital: req.hospitalId,
      image: [image],
    });

   
    const savedDoctor = await newDoctor.save();

   
    if (savedDoctor) {
      return res.status(200).json({ message: "Doctor successfully added" });
    }
  } catch (err) {
    // check if it was a duplicate key error and return a 400 Bad Request error 
    if (err.code === 11000) {
      return res.status(400).json({ message: "Doctor already registered" });
    }
   console.log(err);
    return next(err);
  }
};

export const getAllDoctors = async(req,res,next) => {


  try {
     const doctors = await Doctor.find({ hospital: req.hospitalId });

     if (!doctors) {
       return res.status(400).json({ success: false });
     }

     return res.status(200).json(doctors);

  } catch (err) {
    return next(err)
  }
 

}

