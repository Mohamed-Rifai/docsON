import Hospital from "../models/hospitalSchema.js";
import Doctor from '../models/doctorSchema.js'


export const getHospitals = async (req, res, next) => {
  try {
    //get all hospitals in db
    const hospitals = await Hospital.find({});

    res.status(200).json(hospitals);
  } catch (err) {
    next(err)
  }
};


export const getOneHospital = async (req, res, next) => {
  try {
    //get one particular hospital details using id
    const data = await Hospital.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
     next()
  }
};

export const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.aggregate([
      {
        $lookup: {
          from: "hospitals",
          localField: "hospital",
          foreignField: "_id",
          as: "hospital",
        },
      },
      {
        $unwind: "$hospital",
      },
      {
        $project: {
          name: 1,
          department: 1,
          "hospital.name": 1,
          imageUrl: {
            $arrayElemAt: ["$image.url", 0],
          },
        },
      },
    ]);
    console.log(doctors);

    res.json(doctors);
  } catch (error) {
    next(error);
  }
};





