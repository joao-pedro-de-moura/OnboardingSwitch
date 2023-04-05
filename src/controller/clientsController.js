
const  jwt  = require('jsonwebtoken');
const  ClientModel  = require('../model/clientsModel.js');

const clientController = {

  async auth(req, res) {
    try{
      const email = req.body.email
      const password = req.body.password
          if(!password && !email){
              res.status(404).send("Login incorrect")
            }

      const user = await ClientModel.findOne({where:{email} })
        if(!user){
          res.status(404).send("user doesn't exist")
        }
        const {id} = user
          const token = jwt.sign({id, email}, "efmjnakljfnkef")
          console.log(req)
      return res.json(token)
        }catch{
          res.status(404).send("Cients not found")
        }
    },

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
        const client = await ClientModel.findByPk(req.params.id)
        return res.json(client);
          }catch{
            res.status(404).send("Cients not found")
          }
      },


    async createClient(req, res){
      try{
          const name = req.body.name
          const email = req.body.email
          const password = req.body.password
          const client = await ClientModel.create( {name, email, password})
            res.status(200) 
            return  res.json(client)
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
          }catch(error){res.status(400) 
            const errors = error.errors.map(err => err.message);
            res.status(400) 
                 return  res.json(errors) 
          }
    },


    async deleteClient(req, res) {
      try{
            const clients = await ClientModel.findByPk(req.params.id)
            await clients.destroy();
          return  res.status(200).send("Client deleted");
        
      }catch{
        res.status(404).send("Cients not found")
      }
    }
}

module.exports = clientController