'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId:{
       allowNull: false,
       type: Sequelize.INTEGER,
       references: {
         model: 'Users',
         key: 'id'
       },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'published',
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated',
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};