import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "DocsOn",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

import multer from "multer";

const fileFilter = (req, file, cb) => {
  if (!["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    return cb(new Error("File is not an image"));
  }
  return cb(null, true);
};

const upload = multer({ storage, fileFilter });

export default (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      if (err.message === "File is not an image")
      
        return res.status(400).json({ imageError: "Selected file is not an image" });
       
    }
   
    return next();
  });
};
