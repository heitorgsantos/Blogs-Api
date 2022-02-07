const express = require('express');
// const alert = require('../middlewares/error.js');
const { validationData } = require('../middlewares/validation');
const { Users } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { error } = validationData(displayName, email, password);
  
  if (!error) {
    try {
      await Users.create({ displayName, email, password, image });
      return res.status(201).json({ displayName, email, password, image });
    } catch (err) {
     return res.status(409).json({ message: 'User already registered' });
    }
  }
  return res.status(400).json({ message: error.message });
});

module.exports = router;