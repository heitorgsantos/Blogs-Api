const express = require('express');
const { auth } = require('../middlewares/auth');
const { blogPosts, findAllPosts } = require('../controller/postCategoriesController');

const router = express.Router();

router.post('/', auth, blogPosts);
router.get('/', auth, findAllPosts);

module.exports = router;
