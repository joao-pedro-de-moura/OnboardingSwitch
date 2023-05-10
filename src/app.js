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


app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

exports.module = app