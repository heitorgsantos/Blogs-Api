const { validateCategorie } = require('../middlewares/validation');
const { Categories } = require('../models');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const { error } = validateCategorie(name);
  // 
  if (!error) {
    try {
      const categorie = await Categories.create({ name });
      if (categorie === null) return res.status(400).json({ message: '"name" is required' });
      return res.status(201).json(categorie);
    } catch (err) {
      return res.status(400).json({ message: '"name" is required' });
    }
  }
  return res.status(400).json({ message: error.message });
};

const findAllCategories = async (_req, res) => {
  try {
    const findCategories = await Categories.findAll();
    return res.status(200).json(findCategories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategorie,
  findAllCategories,
};