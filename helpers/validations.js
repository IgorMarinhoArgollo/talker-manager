function loginValidations(email, password) {
  if (!email) {
    return { code: 400, message: 'The field "email" is required' };
  }
  if (!password) {
    return { code: 400, message: 'The field "password" is required' };
  }
  if (password.length < 6) {
    return { code: 400, message: 'The "password" mus be longer or equal to 6 characters' };
  }
  if (!email.includes('@' && '.com')) {
    return { code: 400, message: 'The "email" must follow the structure: "email@email.com"' };
  }
}

function talkerValidation(name, age, talk) {
  if (!name) {
    return { code: 400, message: 'The field "name" is required' };
  }
  if (name.length < 3) {
    return { code: 400, message: 'The "name" must be longer or equal to 3 characters' };
  }
  if (!age) {
    return { code: 400, message: 'The field "age" is required' };
  }
  if (age < 18) {
    return { code: 400, message: 'Talker must be over the legal age' };
  }
  if (!talk) {
    return { code: 400, message: 'The field "talk" is required' };
  }
  if (!talk.rate) {
    return { code: 400, message: 'The field "rate" is required' };
  }
  if (talk.rate > 5 || talk.rate < 1) {
    return { code: 400, message: 'The field "rate" must be an integer between 1 and 5' };
  }
  if (!talk.watchedAt) {
    return { code: 400, message: 'The field "watchedAt" is required' };
  }
  if (!talk.watchedAt.match(/\d\d\/\d\d\/\d\d\d\d/)) {
    return { code: 400, message: 'The field "watchedAt" must follow the structure: "dd/mm/aaaa"' };
  }
}

module.exports = {
  loginValidations,
  talkerValidation,
};
