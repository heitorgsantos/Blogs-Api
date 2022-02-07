// const { Users } = require('../models');

// // const emailFind = Users.findOne({ email }).then((email) => {
// //   if (email) res.status(409).json({ message: 'User already registered' });
// //  }).catch((e) => {
// //   console.log(e.message);
// //       res.status(500).send({ message: 'Algo deu errado' });
// //  });

//  const userCreate = async (email) => {
//     await Users.findOne(email);
//     if (email) return 'User already registered';
//  };
//  console.log(userCreate(), 'entrou no log');

//  module.exports = {
//    userCreate,
//  };
