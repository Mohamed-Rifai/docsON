import mongoose from 'mongoose';

const hospitalSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true
  },
   email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }]
});

export default mongoose.model('Hospital', hospitalSchema);


