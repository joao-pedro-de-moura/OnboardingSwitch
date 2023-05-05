const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const profileModel = require('./profileModel')
const sequelize = new Sequelize('Users', 'postgres', '1234', {
  host : 'localhost',
  dialect:  'postgres'
});

const clientsModel = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
          msg: 'Please provide a value for Name'
      },
      notEmpty: {
          msg: 'Please provide a value for Name'
      }
  }
  },
 password: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
    notNull: {
        msg: 'Please provide a not null value for Password'
    },
    notEmpty: {
        msg: 'Please provide a value for Password'
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
          msg: 'Please provide a value for Email'
      },
      notEmpty: {
          msg: 'Please provide a value for Email'
      },
  }
 
  },
  

},{   
  hooks: {
    beforeCreate: async (user, options) => {
      if(user.password){
        user.password = await bcrypt.hash(user.password, 8);
      }
    }
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
