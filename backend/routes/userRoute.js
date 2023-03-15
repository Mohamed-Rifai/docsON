import express from "express";
import {
  getOneHospital,
  getHospitals,
  getAllDoctors,
  getDoctorProfile,
  appointmentWithPayment,
  verifyPayment,
} from "../controllers/userController.js";
import { verifyTokenUser } from "../middlewares/authorization.js";

const router = express.Router();

router.get("/gethospital/:id", getOneHospital);
router.get("/gethospitals", getHospitals);
router.get("/getAllDoctors", getAllDoctors);
router.get("/doctor-view/:id", getDoctorProfile);
router.post("/appointment-payment",verifyTokenUser,appointmentWithPayment)
router.post("/verifyPayment", verifyPayment)

export default router;
