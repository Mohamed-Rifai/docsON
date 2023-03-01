import express from 'express'
import { createHospital, getHospitals, getOneHospital } from '../controllers/hospitalController.js'

const router = express.Router()


router.post('/createhospital',createHospital)
router.get("/gethospitals", getHospitals);
router.get("/gethospital/:id", getOneHospital);


export default router