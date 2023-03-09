import bcrypt from "bcrypt";
import Hospital from "../models/hospitalSchema.js";




  
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

export const addDoctor = (req,res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.hospitalId);
  res.status(400).json({message:'podaaaaa'})

}
