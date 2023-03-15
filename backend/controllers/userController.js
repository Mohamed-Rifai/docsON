import Hospital from "../models/hospitalSchema.js";
import Doctor from '../models/doctorSchema.js'
import Razorpay from 'razorpay'
import crypto from 'crypto'




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

export const appointmentWithPayment =async (req, res, next ) => {
       
  console.log(req.body);
  console.log(req.userId);

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 100*100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    }
    
    instance.orders.create(options,(err,order) => {
      if(err){
        console.log(err);
        next()
      }
      res.status(200).json({data:order}) 
    })


  } catch (err) {
    console.log('catch working apoinmetwithpayment'); 
    next(err)   
  }

}

export const verifyPayment = (req, res, next ) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign =  crypto
      .createHmac("sha256",process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex")

      if(razorpay_signature === expectedSign) {
        return res.status(200).json({ message: "Payment verified successfully"})
      }else{
        res.status(400).json({ message: "Invalid signature sent"})
      }

    } catch (err) {
      console.log(err,'veryfyPayment catch working');
      next(err)
    }
}



