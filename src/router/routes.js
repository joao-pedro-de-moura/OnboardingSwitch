import require from 'express'
import clientController from '../controller/clientsController.js'


const router = (app) =>{
app.get('/clients', clientController.allClient)
app.get('/clients/:id', clientController.oneClient)
app.post('/clients', clientController.createClient)
app.put('/clients/:id', clientController.updateClient)
app.delete('/clients/:id', clientController.deleteClient);

}

export default router