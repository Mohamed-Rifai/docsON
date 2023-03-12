import express from 'express'
import {getOneHospital, getHospitals, getAllDoctors} from '../controllers/userController.js'

const router = express.Router()


router.get("/gethospital/:id", getOneHospital);
router.get("/gethospitals", getHospitals);
router.get("/getAllDoctors", getAllDoctors);

export default router