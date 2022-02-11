const express = require('express');

const router = express.Router();

const loginControllers = require('../controller/loginController');

router.post('/', loginControllers.login);

module.exports = router;
