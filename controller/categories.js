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

module.exports = {
  createCategorie,
};