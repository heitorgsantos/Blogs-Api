const User = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    
  },
  { timestamps: false });

  return users;
};

module.exports = User;
