import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  }
});

export default mongoose.model('Appointment', appointmentSchema);

 
