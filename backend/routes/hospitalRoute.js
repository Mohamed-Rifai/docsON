import express from "express";
import uploadImage from '../config/cloudinary.js'
import { verifyTokenHospital } from "../middlewares/authorization.js";

import {
  addDoctor,
  getAllDoctors,
  getDoctorView,
  getHome, 
} from "../controllers/hospitalController.js";

const router = express.Router();



router.get("/getHome",verifyTokenHospital, getHome)
router.post("/add-doctor", verifyTokenHospital, uploadImage, addDoctor);
router.get("/getAllDoctors",verifyTokenHospital, getAllDoctors)
router.get("/doctor-view/:id", verifyTokenHospital, getDoctorView)

export default router;
