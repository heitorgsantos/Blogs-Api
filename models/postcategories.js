const PostCategory = (sequelize) => {
  const postCategory = sequelize.define('PostCategory', {}, { 
    timestamps: false, tableName: 'PostsCategories' });

  postCategory.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'blogPosts',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }; 
  return postCategory;
};

module.exports = PostCategory;
