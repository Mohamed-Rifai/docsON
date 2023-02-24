import validator from 'validator';
import isEmpty from './isEmpty.js';

const { isLength, isEmpty: _isEmpty, isEmail, equals } = validator;

export default function validateSignupInput (data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    if (!isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 to 30 chars';
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

    return {
        errors,
        isValid: isEmpty(errors)
    }
}