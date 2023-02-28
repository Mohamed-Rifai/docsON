import express from 'express'
import { createHospital, getHospitals } from '../controllers/hospitalController.js'

const router = express.Router()


router.post('/createhospital',createHospital)
router.get("/gethospitals", getHospitals);

export default router