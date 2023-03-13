import express from "express";
import {
  getOneHospital,
  getHospitals,
  getAllDoctors,
  getDoctorProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/gethospital/:id", getOneHospital);
router.get("/gethospitals", getHospitals);
router.get("/getAllDoctors", getAllDoctors);
router.get("/doctor-view/:id", getDoctorProfile);

export default router;
