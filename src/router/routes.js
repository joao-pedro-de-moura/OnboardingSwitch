
const  reqLogin  = require('../middleware/reqLogin.js');
const  clientController  = require('../controller/clientsController.js');
const  imageController = require('../controller/profileController.js');
const upload = require('../config/multerConfig')

const router = (app) =>{
app.get('/clients', clientController.allClient)
app.get('/clients/:id',  clientController.oneClient)
app.post('/clients', clientController.createClient)
app.post('/auth', clientController.auth)
app.post('/upload', imageController.store)
app.put('/clients/:id', clientController.updateClient)
app.put('/updatePassword/:id', clientController.updateClientPassword)
app.delete('/clients/:id',  clientController.deleteClient);
app.delete('/clients/profile/:id', imageController.deleteProfile);
app.get('/', clientController.success)
}

module.exports = router