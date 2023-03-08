import express from 'express'
import uploadImage from '../config/cloudinary.js'
import {
  hospitalLoginController,
  hospitalSignupController,
  userLoginController,
  userSignupController,
} from "../controllers/authController.js";

const router = express.Router()

router.post("/user-signup", userSignupController);
router.post("/user-login", userLoginController);
router.post('/hospital-signup',uploadImage, hospitalSignupController) 
router.post('/hospital-login',hospitalLoginController)


export default router