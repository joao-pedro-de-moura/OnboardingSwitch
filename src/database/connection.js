import Sequelize from 'sequelize'

      const connection = new Sequelize('Clients', 'postgres', '1234', {
        dialect: 'postgres'
        
      })


      export default connection