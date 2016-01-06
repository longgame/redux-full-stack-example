'use strict';

var validate = require('validator');

exports.isValidEmail = (email) => {
  return validate.isEmail(email);
};

exports.isValidPassword = (password) => {
  if ('string' !== typeof password) return false;
  if (password.length < 6) return false;
  if (password.length > 50) return false;
  if (!/\d/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password)) return false;
  return true;
};
