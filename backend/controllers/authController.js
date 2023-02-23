import User from '../models/user.js'


import ErrorResponse from '../error/ErrorResponse.js'

export const signupController = async(req,res,next) => {
       
    const {name, email, password } = req.body 

     if(!name || !email || !password ){
         return next(ErrorResponse.badRequest('Empty field occured!!!'))
     }

     try {
        //checking for dublicate user

        const user = await User.findOne({ email })
        
        if(user) return next(ErrorResponse.badRequest('Email already registered'))
     } catch (err) {
        next(err)
     }

     try {
        //saving to db
        const user = await User.create({    
         name,
         email,
         password,
        })
       
       if (user) {
         res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            
         })
       }else{

         next(ErrorResponse.badRequest('Something went wrong'))
       }


     } catch (err) {
        if (err.code === 11000)
            return next(ErrorResponse.badRequest('User already registered'))
        
      return next(err)

     }
   
}

export const loginController = async (req,res,next) => {
     
   const {email, password} = req.body

    const user = await User.findOne({email})
}