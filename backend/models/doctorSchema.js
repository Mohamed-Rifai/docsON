import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  image: [
    {
      url: {
        type: String,
        default:
          "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/06/doctor-writing-notes-clipboard-0624221.jpg",
      },
      filename:{
        type: String,
        default:
          "DocsOn/lcst8001000",
      }
    },
  ],
  availableDays: {
    type: [String],
    required: true,
  },
  // appointments: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Appointment'
  // }],
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
});

export default mongoose.model('Doctor', doctorSchema);


