import express from "express";
import uploadImage from '../config/cloudinary.js'
import {
  addDoctor,
  getHospitals,
  getOneHospital,
} from "../controllers/hospitalController.js";

const router = express.Router();


router.get("/gethospitals", getHospitals);
router.get("/gethospital/:id", getOneHospital);
router.post("/add-doctor", addDoctor);

export default router;
