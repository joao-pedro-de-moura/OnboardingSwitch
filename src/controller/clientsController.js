import ClientModel from "../model/clientsModel.js";
import validation from "../validation/validation.js";
const clientController = {
    async allClient(req, res) {
      try{
        const client = await ClientModel.findAll();
        res.json(client);
      }catch(error){
        res.status(404).send("There are no clients")
      }  
    },


    async oneClient(req, res) {
      try{
          if(!await ClientModel.findByPk(req.params.id)){
            return res.status(404).send("Client doesn't exists")
            }
          }catch{
            res.status(404).send("Cients not found")
          }
            const client = ClientModel.findByPk(req.params.id)
            res.json(client);
      },


    async createClient(req, res){
      try{
        // const clientId =  await ClientModel.findByPk(req.params.id)
         //   if(clientId.email === req.body.email ){
         //   return res.status(400).send("Client alredy exists")
           //   }else{
                    const name = req.body.name
                    const email = req.body.email
                    const password = req.body.password
                    const client = await validation.createClient( name, email, password)
                    res.status(200) 
                    return  res.json(client)
                //    }
      }catch(error){
        const errors = error.errors.map(err => err.message);
        res.status(400)   
        return  res.json(errors)
      }
    },


    async updateClient(req, res) {
      try{
          const name = req.body.name
          const email = req.body.email
          const password = req.body.password
          const clients = await ClientModel.findByPk(req.params.id);
            clients.name = name;
            clients.email = email;
            clients.password = password;
              await clients.save();
                res.status(200).send("Client updated");
          }catch(error){
            const errors = error.errors.map(err => err.message);
            res.status(400)   
            return  res.json(errors)
          }
    },


    async deleteClient(req, res) {
      try{
        if(!await ClientModel.findByPk(req.params.id)){
            res.status(404).send("Client not found")
          }else{
            const clients = ClientModel.findByPk(req.params.id)
            await clients.destroy();
            res.status(200).send("Client deleted");
        }
      }catch{
        res.status(404).send("Cients not found")
      }
    }
}

export default clientController;