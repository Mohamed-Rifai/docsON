import validator from "validator";
import isEmpty from "./isEmpty.js";

const {
  isLength,
  isEmpty: _isEmpty,
  isIn,
} = validator;

const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function validateDoctor(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.department = !isEmpty(data.department) ? data.department : "";
 data.days = !isEmpty(data.days) ? JSON.parse(data.days) : [];



  if (!_isEmpty(data.name) && !isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Invalid name";
  }

  if (_isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (
    !_isEmpty(data.department) &&
    !isLength(data.department, { min: 2, max: 30 })
  ) {
    errors.department = "Invalid department";
  }

 if (data.days.length === 0) {
   errors.days = "Days field is required";
 } else {
   const invalidDays = data.days.filter(
     (day) => !isIn(day.toLowerCase(), daysOfWeek)
   );
   if (invalidDays.length > 0) {
     errors.days = "Please provide a valid day";
   }
 }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
