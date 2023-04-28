const { Sequelize } = require('sequelize');
const  ClientModel  = require('./clientsModel');
const sequelize = new Sequelize('vpc_db', 'postgres', '12345678', {
  host : 'database-1.cgzj0qrf0og8.sa-east-1.rds.amazonaws.com',
  dialect:  'postgres'
});
      

const profileModal = sequelize.define('profiles', {
    originalname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
              msg: 'Preencha o campo corretamente'
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
            msg: 'Preencha o campo corretamente'
        },
        notEmpty: {
            msg: 'Preencha o campo'
        }
    }
      },
    
    },
    {timestamps: false}
)


module.exports = profileModal 