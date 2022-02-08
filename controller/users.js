// const express = require('express');
// const alert = require('../middlewares/error.js');
const { validationData } = require('../middlewares/validation');
const { Users } = require('../models');

// cadastra um novo usuario
const create = async (req, res) => {
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
};

const findAllUsers = async (req, res) => {
  // const { displayName, email, image } = req.body;
  // const { id } = req.params;

  try {
    const findUsers = await Users.findAll();
    return res.status(200).json(findUsers);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const findId = async (req, res) => {
  // const { id } = req.params;
  try {
    const findUserId = await Users.findByPk(req.params.id);
    if (!findUserId) return res.status(404).json({ message: 'User does not exist' });
    res.status(200).json(findUserId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// login user

module.exports = {
  create,
  findAllUsers,
  findId,
};