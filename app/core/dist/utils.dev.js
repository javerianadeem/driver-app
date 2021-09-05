"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detailValidator = exports.titleValidator = exports.locationNameValidator = exports.registrationNumberValidator = exports.departmentValidator = exports.nameValidator = exports.passwordValidator = exports.emailValidator = void 0;

var emailValidator = function emailValidator(email) {
  var re = /\S+@\S+\.\S+/;
  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';
  return '';
};

exports.emailValidator = emailValidator;

var passwordValidator = function passwordValidator(password) {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  return '';
};

exports.passwordValidator = passwordValidator;

var nameValidator = function nameValidator(name) {
  if (!name || name.length <= 0) return 'Name cannot be empty.';
  return '';
};

exports.nameValidator = nameValidator;

var departmentValidator = function departmentValidator(department) {
  if (!department || department.length <= 0) return 'Department cannot be empty.';
  return '';
};

exports.departmentValidator = departmentValidator;

var registrationNumberValidator = function registrationNumberValidator(registrationNumber) {
  if (!registrationNumber) return 'Registration Number cannot be empty.';
  if (registrationNumber.length < 7 || registrationNumber.length > 8) return 'Please enter valid 7 digit registration number';
  return '';
};

exports.registrationNumberValidator = registrationNumberValidator;

var locationNameValidator = function locationNameValidator(locationName) {
  if (!locationName) return 'Please enter valid location.';
  return '';
};

exports.locationNameValidator = locationNameValidator;

var titleValidator = function titleValidator(title) {
  if (!title || title.length <= 0) return 'Title cannot be empty.';
  return '';
};

exports.titleValidator = titleValidator;

var detailValidator = function detailValidator(detail) {
  if (!detail || detail.length <= 0) return 'Notification detail cannot be empty.';
  return '';
};

exports.detailValidator = detailValidator;