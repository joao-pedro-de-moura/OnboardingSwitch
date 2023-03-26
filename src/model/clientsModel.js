import Sequelize from 'sequelize'
import connection from "../database/connection.js";
      

const clientsModal = connection.define('clients', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
 password: {
   type: Sequelize.STRING,
    
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  

},{
  timestamps: false});

export default clientsModal