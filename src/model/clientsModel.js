import Sequelize from 'sequelize'
import connection from "../database/connection.js";
      

const clientsModal = connection.define('clients', {
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
        msg: 'Please provide a value for Password'
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
  timestamps: false});

export default clientsModal