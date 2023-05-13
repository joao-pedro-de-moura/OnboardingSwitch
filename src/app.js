require('dotenv').config()
const  express  = require('express');
const  routes  = require('../src/router/routes.js');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
routes(app)

const port = 3002;



app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

exports.module = app