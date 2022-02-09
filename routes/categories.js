const express = require('express');
const { auth } = require('../middlewares/auth');

const router = express.Router();
const categories = require('../controller/categories');

router.post('/', auth, categories.createCategorie);
router.get('/', auth, categories.findAllCategories);

module.exports = router;
