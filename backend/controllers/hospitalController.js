import bcrypt from "bcrypt";
import Hospital from "../models/hospitalSchema.js";
import validateSignupHospital from "../validation/hospitalSignup.js";

export const createHospital = async (req, res) => {
 
  const { errors, isValid } = validateSignupHospital(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  //find dublicate user
  Hospital.findOne({
    email: req.body.email,
  }).then(async (user) => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists",
      });
    } else {
      // Hash the password
      const hash = await bcrypt.hash(req.body.password, 10);

      Hospital.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        photo: req.body.photo,
      }).then((user) => {
        res.json(user);
      });
    }
  });

 
 
}
  
