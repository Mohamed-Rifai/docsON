import bcrypt from "bcrypt";
import Hospital from "../models/hospitalSchema.js";
import doctorValidation from '../validation/doctorValidation.js'
import Doctor from "../models/doctorSchema.js";




export const getHome = async (req, res, next) => {

   const hospitalId = req.hospitalId;

   try{

    const hospitalData = await Hospital.findById(hospitalId).select(
      "-_id name email"
    );
   res.status(200).json(hospitalData) 

   }catch(err){

    console.log(err);
   }
    

}

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

    // check a doctor with the same details exists
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
    // check if it was a duplicate key  
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



