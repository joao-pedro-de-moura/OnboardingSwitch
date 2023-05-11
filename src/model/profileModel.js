const { Sequelize } = require('sequelize');

const clientsModel = require('./clientsModel');
const sequelize = new Sequelize('db_teste', 'db_aws', '12345678', {
    host : 'database-2.coe0sqerpl7i.sa-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    port: '5433'
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

