const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const profileModel = require('./profileModel')
const sequelize = new Sequelize('vpc_db', 'postgres', '12345678', {
  host : 'database-1.cgzj0qrf0og8.sa-east-1.rds.amazonaws.com',
  dialect:  'postgres'
});
      

const clientsModal = sequelize.define('users', {
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

clientsModal.hasOne(profileModel, { foreignKey: 'user_id' });

module.exports = clientsModal 
