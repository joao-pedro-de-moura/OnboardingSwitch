require('dotenv').config()
const  express  = require('express');
const  routes  = require('../src/router/routes.js');
const cors = require('cors')
const app = express();
const sequelize = require('../src/model/clientsModel.js')
app.use(cors())
app.use(express.json());
routes(app)

const port = 3002;

async function teste(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

teste()

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

exports.module = app