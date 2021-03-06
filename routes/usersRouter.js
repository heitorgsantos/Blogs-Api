const express = require('express');
const { auth } = require('../middlewares/auth');

const router = express.Router();

const userControllre = require('../controller/users');

router.post('/', userControllre.create);
router.get('/', auth, userControllre.findAllUsers);
router.get('/:id', auth, userControllre.findId);

module.exports = router;
