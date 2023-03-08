import User from '../models/user.js'
import Hospital from '../models/hospitalSchema.js'
import validateSignupInput from '../validation/signup.js'
import validateLoginInput from '../validation/login.js'
import validateSignupHospital from "../validation/hospitalSignup.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'





export const userSignupController = async(req,res) => {
      
   const { errors, isValid } = validateSignupInput(req.body);

   if (!isValid) {
      return res.status(400).json(errors);
   }
   User.findOne({
      email: req.body.email
   }).then(async user => {
      if (user) {
         return res.status(400).json({
            email: 'Email already exists'
         });
      }
      else {
         const hash = await bcrypt.hash(req.body.password, 10)

         User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
         }).then(user => {
            res.json(user)
         })

      }
   });


    
   
}

export const userLoginController = async (req,res) => {
      
   const { errors, isValid } = validateLoginInput(req.body);

   if (!isValid) {
      return res.status(400).json(errors);
   }

   const email = req.body.email;
   const password = req.body.password;

   User.findOne({ email })
      .then(user => {
         if (!user) {
            errors.email = 'User not found'
            return res.status(404).json(errors);
         }
         bcrypt.compare(password, user.password)
            .then(isMatch => {
               if (isMatch) {
                  const payload = {
                     id: user.id,
                     name: user.name
                  }
                  jwt.sign(
                    payload,
                    process.env.USER_JWT_SECRET,
                    {
                      expiresIn: 3600,
                    },
                    (err, token) => {
                      if (err)
                        console.error("There is some error in token", err);
                      else {
                        res.json({
                          success: true,
                          name: user.name,
                          email: user.email,
                          id: user.id,
                          token: `Bearer ${token}`,
                        });
                      }
                    }
                  );
               }
               else {
                  errors.password = 'Incorrect Password';
                  return res.status(400).json(errors);
               }
            });
      });
  
}

export const hospitalSignupController = async (req, res) => {
            
   //for validate request datas
  const { errors, isValid } = validateSignupHospital(req.body);
 
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //check dublicate hospital user
  Hospital.findOne({
    email: req.body.email,
  }).then(async (hospital) => {
    if (hospital) {
      return res.status(400).json({
        email: "Email already exists",
      });
    } else {

      // save datas into collection

      const data = req.body
      const image = {
          url: req.file.path,
          filename: req.file.filename
      }
      const hash = await bcrypt.hash(data.password, 10);
      
      Hospital.create({
        name: data.name,
        email: data.email,
        password: hash,
        place:data.place,
        state:data.state,
        zip:data.zip,
        image: image
      })
      .then((res) => {
        console.log(res);
       json({status:true})
      });
    }
  });
};

export const hospitalLoginController = async (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Hospital.findOne({ email }).then((hospital) => {
    if (!hospital) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, hospital.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: hospital.id,
          name: hospital.name,
        };
        jwt.sign(
          payload,
          process.env.HOSPITAL_JWT_SECRET,
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) console.error("There is some error in token", err);
            else {
              res.json({
                success: true,
                name: hospital.name,
                email: hospital.email,
                id: hospital.id,
                token: `Bearer ${token}`,
              });
            }
          }
        );
      } else {
        errors.password = "Incorrect Password";
        return res.status(400).json(errors);
      }
    });
  });
};




