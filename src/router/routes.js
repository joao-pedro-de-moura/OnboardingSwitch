
const  reqLogin  = require('../middleware/reqLogin.js');
const  clientController  = require('../controller/clientsController.js');
const  imageController = require('../controller/profileController.js');


const router = (app) =>{
app.get('/clients', clientController.allClient)
app.get('/clients/:id',  clientController.oneClient)
app.post('/clients', clientController.createClient)
app.post('/auth', clientController.auth)
app.put('/clients/:id', clientController.updateClient)
app.delete('/clients/:id', clientController.deleteClient);
app.post('/', imageController.store)
}

module.exports = router