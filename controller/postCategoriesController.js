const { validatePost } = require('../middlewares/validation');
const { BlogPosts, Categories } = require('../models');

const verifyCategory = async (category) => {
  const categories = await Categories.findAll({ where: { id: category } });
  return categories.length === category.length;
};

const blogPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { error } = validatePost(title, content, categoryIds);

  try {
    if (error) return res.status(400).json({ message: error.message });
  
  const createBlogPost = await BlogPosts.create({ title, content, categoryIds, userId: id });
  const blog = { id: createBlogPost.id,
    userId: id,
    title,
    content,
  };
  if (await verifyCategory(categoryIds) === false) { 
    return res.status(400).json({ message: '"categoryIds" not found' }); 
  }
    return res.status(201).json(blog);
  } catch (err) {
    console.log(err.message, 'entrou no cath');
  }
};

module.exports = blogPosts;