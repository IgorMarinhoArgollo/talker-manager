const crypto = require('crypto');
const { loginValidations } = require('../helpers/validations');

const generateToken = () => (crypto.randomBytes(8).toString('hex'));

const login = (req, res) => {
  const { email, password } = req.body;
  const valid = loginValidations(email, password);
  if (!valid) {
    return res.status(200).json({ token: `Bearer ${generateToken()}` });
  }
  return res.status(valid.code).json({ message: valid.message });
};

module.exports = login;
