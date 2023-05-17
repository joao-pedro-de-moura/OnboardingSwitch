const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const profileModel = require('./profileModel')
const sequelize = new Sequelize('db_teste', 'teste', '12345678', {
  host : 'teste.ccb2gvbkuq38.sa-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  port: '5432'
});




const clientsModel = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
          msg: 'Por favor, insira um nome'
      },
      notEmpty: {
          msg: 'Por favor, insira um nome'
      }
  }
  },
 password: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
    notNull: {
        msg: 'Por favor, insira uma senha'
    },
    notEmpty: {
        msg: 'Por favor, insira uma senha'
    }
}
  },

  
  email: {
    type: Sequelize.STRING,
    notEmpty: true, 
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
          msg: 'Por favor, insira um email'
      },
      notEmpty: {
          msg: 'Por favor, insira um email'
      },
  }
 
  },
 

},{   
  hooks: {
    beforeCreate: async (user, options) => {
      if(user.password){
        user.password = await bcrypt.hash(user.password, 8);
      }
    },
  
    
  
  },


  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ],
    
},


)
clientsModel.hasMany(profileModel, { foreignKey: 'user_id' });


module.exports = clientsModel 

