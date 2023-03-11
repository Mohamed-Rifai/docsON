import express from "express";
import uploadImage from '../config/cloudinary.js'
import { verifyTokenHospital } from "../middlewares/authorization.js";

import {
  addDoctor,
  getAllDoctors,
  getHospitals,
  getOneHospital,
} from "../controllers/hospitalController.js";

const router = express.Router();


router.get("/gethospitals", getHospitals);
router.get("/gethospital/:id", getOneHospital);
router.post("/add-doctor", verifyTokenHospital, uploadImage, addDoctor);
router.get("/getAllDoctors",verifyTokenHospital, getAllDoctors)

export default router;
