// const authService = require('./authService');
// const { validateLogin } = require('../middlewares/validation');
// const { Users } = require('../models');

// const loginValidate = async (email, password) => {
//   const { error } = validateLogin(email, password);
//   if (error) return 'Error';
//   const findUser = await Users.findOne({ where: { email } });
//   if (!findUser || password !== findUser.password) {
//     return 'Nao encontrado';
//   } 
//   const { password: _password, ...userLog } = findUser;
//   const token = authService.genToken(userLog);
//   console.log(token, 'token');
//   return { token, findUser };
// };

// module.exports = {
//   loginValidate,
// };