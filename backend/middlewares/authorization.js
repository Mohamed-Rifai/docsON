import jwt from "jsonwebtoken";

export const verifyTokenHospital = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    const error = new Error("No token provided");

   
    return res.status(401).json({error:error})
  }

  try {
    const decoded = jwt.verify(
      token.split(" ")[1],
      process.env.HOSPITAL_JWT_SECRET 
    );
   
    if (decoded) {
        req.hospitalId = decoded.id
      next();
    }
  } catch (err) {
    console.log( err);
    // handle the error
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}; 
export const verifyTokenUser = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    const error = new Error("No token provided");

   
    return res.status(401).json({error:error})
  }

  try {

    console.log('veryfy token try working');
    const decoded = jwt.verify(
      token.split(" ")[1],
      process.env.USER_JWT_SECRET
    );
   
    if (decoded) {
        req.userId = decoded.id
      next();
    }
  } catch (err) {
    console.log( err);
    // handle the error
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}; 
