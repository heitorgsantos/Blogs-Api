const authService = require('../service/authService');

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const user = authService.verifyToken(authorization);
    console.log(req.headers, 'entrou no header');
    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = user;
    console.log(user, 'user AUTH');
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Falha na autenticação' });
  }
};

module.exports = {
  auth,
};
