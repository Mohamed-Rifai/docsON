import jwt from "jsonwebtoken";

export const verifyTokenHospital = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const error = new Error("No token provided");

   
    return res.status(401).json({error:error})
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], "dfoi877sdhf24hjhfsdauhj");
   
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
