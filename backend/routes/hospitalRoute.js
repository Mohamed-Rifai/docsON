import express from 'express'
import {createHospital} from '../controllers/hospitalController.js'

const router = express.Router()


router.post('/createhospital',createHospital)


export default router