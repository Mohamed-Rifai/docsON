import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type:String,
    required:true
  },

  place: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  image: [
    {
      url: {
        type: String,
      },
      filename: {
        type: String,
      },
    },
  ],
});

export default mongoose.model('Hospital', hospitalSchema);


