'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', { 
      id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement:true,
          primaryKey: true,
      },
      originalname:{
        type : Sequelize.STRING,
        allowNull: false,
       },
       filename:{
        type : Sequelize.STRING,
        allowNull: false,
       },
       user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        },
        url:{
          type : Sequelize.STRING,
          allowNull: true,
        },
        createdAt:{
        type : Sequelize.DATE,
        allowNull: false,
       },
       updatedAt:{
        type : Sequelize.DATE,
        allowNull: false,
       }

    });
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('profile');
    
  }
};
