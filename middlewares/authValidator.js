const authValidator = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  if (authorization.length !== 23) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  next();
};

module.exports = authValidator;
