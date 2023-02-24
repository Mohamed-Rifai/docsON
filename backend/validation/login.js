import validator from 'validator';
import isEmpty from './isEmpty.js';

const { isLength, isEmpty: _isEmpty, isEmail  } = validator;


export default function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

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

    return {
        errors,
        isValid: isEmpty(errors)
    }
}