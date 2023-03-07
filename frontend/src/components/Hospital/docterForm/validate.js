const validate = (name,department) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required";
  } else if (!isNaN(name)) {
    errors.name = "Invalid name";
  }
  if (!department) {
    errors.department = "department is required";
  } else if (!isNaN(department)) {
    errors.department = "Invalid department";
  }

 
  return errors;
};

export default validate;
