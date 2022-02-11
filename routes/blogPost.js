const express = require('express');
const { auth } = require('../middlewares/auth');
const blogPosts = require('../controller/postCategoriesController');

const router = express.Router();

router.post('/', auth, blogPosts);

module.exports = router;
