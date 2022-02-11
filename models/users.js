const User = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    
  },
  { timestamps: false });

  users.associate = (models) => {
    models.Users.hasMany(models.BlogPosts, {
      as: 'blogPosts',
      foreignKey: 'blogPostId',
    });
  };

  return users;
};

module.exports = User;
