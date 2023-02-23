import express from 'express'
import { signupController } from '../controllers/authController.js'

const router = express.Router()

router.get('/',signupController)


export default router