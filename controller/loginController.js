const { validateLogin } = require('../middlewares/validation');
// const { loginValidate } = require('../service/loginService');
const { Users } = require('../models');
const authService = require('../service/authService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { error } = validateLogin(email, password);
  try {
    const findUser = await Users.findOne({ where: { email } });
    if (!findUser || password !== findUser.password) {
      return res.status(400).json(error.message);
    } 
    if (error) return res.status(400).json(error.message);
    const { password: _password, ...userLog } = findUser;
    const token = authService.genToken(userLog);
    console.log(token, 'token');
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login };