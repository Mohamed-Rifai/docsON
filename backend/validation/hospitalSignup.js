import validator from 'validator';
import isEmpty from './isEmpty.js';

const { isLength, isEmpty: _isEmpty, isEmail, isPostalCode, equals } = validator;

export default function validateSignupHospital (data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';
    data.place = !isEmpty(data.city) ? data.place : "";
    data.state = !isEmpty(data.state) ? data.state : '';
    data.zip = !isEmpty(data.zip) ? data.zip : '';

    if (!isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be 2 chars';
    }

    if (_isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (!isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (_isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if (!isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must have 6 chars';
    }

    if (_isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (!isLength(data.confirmPassword, { min: 6, max: 30 })) {
        errors.confirmPassword = 'Password must have 6 chars';
    }

    if (!equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Password and Confirm Password must match';
    }

    if (_isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Password is required';
    }


    if (_isEmpty(data.place)) {
        errors.city = 'Place is required';
    }

    if (_isEmpty(data.state)) {
        errors.state = 'State field is required';
    }

    if (_isEmpty(data.zip)) {
        errors.zip = 'Zip field is required';
    } else if (!isPostalCode(data.zip, 'any')) {
        errors.zip = 'Please provide a valid zip code';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
