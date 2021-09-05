export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty';
  if (password.length < 6) return 'Password cannot be less than 6 digits';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const departmentValidator = department => {
  if (!department || department.length <= 0 ) return 'Department cannot be empty.';

  return '';
};

export const registrationNumberValidator = registrationNumber => {
  if (!registrationNumber) return 'Registration Number cannot be empty.';
  if(registrationNumber.length > 3) return 'Please enter valid registration number'
  return '';
};
  export const locationNameValidator = locationName => {
    if (!locationName) return 'Please enter valid location.';
    return '';
};

export const titleValidator = title => {
  if (!title || title.length <= 0) return 'Title cannot be empty.';

  return '';
};

export const detailValidator = detail => {
  if (!detail || detail.length <= 0) return 'Notification detail cannot be empty.';

  return '';
};

export const monthValidator = month => {
  if (!month || month.length <= 0 ) return 'Please select a month';

  return '';
};

export const yearValidator = year => {
  if (!year || year.length <= 0 ) return 'Please select a year';

  return '';
};

export const feeValidator = fee => {
   if (!fee || fee.length <= 0 ) return 'Please enter valid fee status';

  return '';
};