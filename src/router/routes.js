
const  reqLogin  = require('../middleware/reqLogin.js');
const  clientController  = require('../controller/clientsController.js');


const router = (app) =>{
app.get('/clients', clientController.allClient)
app.get('/clients/:id',  clientController.oneClient)
app.post('/clients', clientController.createClient)
app.post('/auth', clientController.auth)
app.put('/clients/:id', reqLogin, clientController.updateClient)
app.delete('/clients/:id', reqLogin, clientController.deleteClient);

}

module.exports = router