const { Users } = require('../models');
const { validateLogin } = require('../middlewares/validation');
const authServices = require('../service/authService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { error } = validateLogin(email, password);
  console.log(error, 'log error');

  if (!error) {
    try {
      const findUser = await Users.findOne({ where: { email } });
      if (!findUser) return res.status(400).json({ message: 'Invalid fields' });
      console.log(findUser, 'entrou no findUser');
      const { password: _password, ...userLog } = findUser.dataValues;
      const token = authServices.genToken(userLog);
      return res.status(200).json({ token });
    } catch (err) {
      console.log(err);
    }
  } 
    return res.status(400).json({ message: error.message });
};

module.exports = { login };