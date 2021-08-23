'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('tasks', {
       id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        tasks: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        check:{
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allow_null: false,
        },
        user_id:{
          type: Sequelize.INTEGER,
          reference: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }
    });
   
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('tasks');
 
  }
};
