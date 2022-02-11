const blogPosts = (sequelize, DataTypes) => {
  const blog = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }, 
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blog.associate = (models) => {
    models.BlogPosts.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'userId',
      
    });
  };
  return blog;
};

module.exports = blogPosts;
