import express from 'express'
import {
  userLoginController,
  userSignupController,
} from "../controllers/authController.js";

const router = express.Router()

router.post("/user-signup", userSignupController);
router.post("/user-login", userLoginController);


export default router