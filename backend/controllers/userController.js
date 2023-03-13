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
    //get some details of doctors with hospital name 
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
    

    res.status(200).json(doctors);
  } catch (err) {
    next(err);
  }
};



export const getDoctorProfile = async (req, res, next) => {
  try {
    // find the doctor and populate the hospital field
    const doctor = await Doctor.findById(req.params.id).populate("hospital");
   

    // extract the image URL from the first image object, or set it to null if no images exist
    const imageUrl = doctor.image.length > 0 ? doctor.image[0].url : null;
    // parse the availableDays array into an array of lowercase day names and check if today is in it
    const availableDays = JSON.parse(doctor.availableDays);
    console.log(availableDays);
    const availableToday = availableDays.includes(getToday());

    // create the response object with the relevant fields
    const response = {
      _id: doctor._id,
      name: doctor.name,
      department: doctor.department,
      imageUrl,
      availableToday,
      hospital: doctor.hospital.name,
    };
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

// helper function to get the day of the week
function getToday() {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // get the current date and time in the UTC time zone
  const now = new Date();
  const todayIndex = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  ).getDay();
   
  // return the lowercase day name
  return days[todayIndex];
}



