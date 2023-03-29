const  express  = require('express');
const  routes  = require('../src/router/routes.js');

const app = express();


app.use(express.json());
routes(app)

const port = 3000;

app.listen(port, ()=> {
    console.log(`http://localhost:${port}/`)
})

exports.module = app