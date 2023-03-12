import express from 'express'
import {getOneHospital, getHospitals} from '../controllers/userController.js'

const router = express.Router()


router.get("/gethospital/:id", getOneHospital);
router.get("/gethospitals", getHospitals);

export default router