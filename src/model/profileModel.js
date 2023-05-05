const { Sequelize } = require('sequelize');

const clientsModel = require('./clientsModel');
const sequelize = new Sequelize('Users', 'postgres', '1234', {
    host : 'localhost',
    dialect:  'postgres'
});
      

const profileModel = sequelize.define('profiles', {
    originalname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
              msg: 'Preencha o campo originalname corretamente'
          },
          notEmpty: {
              msg: 'Preencha o campo'
          }
      }
      },
      filename: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notNull: {
            msg: 'Preencha o campo filename corretamente'
        },
        notEmpty: {
            msg: 'Preencha o campo'
        }
    }
      },
      url:{
        type : Sequelize.STRING,
        allowNull: true,
      },
      
    
    },
    {timestamps: false}
)



module.exports = profileModel 