const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }  else if (!isNaN(values.name)) {
    errors.name = "Invalid entry";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.place) {
    errors.place = "Place is required";
  } else if (!isNaN(values.place)) {
    errors.place = "Invalid entry";
  }

  if (values.state === "") {
    errors.state = "State is required";
  } else if (!isNaN(values.state)) {
    errors.state = "Invalid entry";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!/^[0-9]{10}$/.test(values.phone)) {
    errors.phone = "Phone number is invalid";
  }

  if (!values.zip) {
    errors.zip = "Pin code is required";
  } else if (!/^[0-9]{5,6}$/.test(values.zip)) {
    errors.zip = "Pin code is invalid";
  }
    if (values.file === null) {
      errors.file = "Image is required";
    }

  return errors;
};

export default validate;
