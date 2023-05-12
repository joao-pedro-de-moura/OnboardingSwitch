const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('db_teste', 'teste', '12345678', {
  host : 'teste.ccb2gvbkuq38.sa-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  port: '5432'
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

