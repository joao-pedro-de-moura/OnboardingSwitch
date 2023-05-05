
const  jwt  = require('jsonwebtoken');
const  ClientModel  = require('../model/clientsModel.js');
const profileModel = require('../model/profileModel.js')
const bcrypt = require('bcryptjs');

const clientController = {

  async auth(req, res) {
    try{
      
      const email = req.body.email
      const password= req.body.password
      const user = await ClientModel.findOne({where:{email} })
     
      const compare = bcrypt.compareSync(password, user.password)
      if(!compare){
        return res.status(401).json({
          erros: ['Login Failed']
      })
      }
    
        const {id} = user
          const token = jwt.sign({id, email}, "efmjnakljfnkef")
            return res.json({token, user})
        }catch{
          
          res.status(404).send("Cients not found")
        }
    },

    async allClient(req, res) {
      try{
        const client = await ClientModel.findAll({
          order: [['id', 'DESC'], [profileModel, 'id', 'DESC']],
          include: {model: profileModel}
        });
        res.json(client);
      }catch(error){
        res.status(404).send("There are no clients")
      }  
    },


    async oneClient(req, res) {
      try{
        const client = await ClientModel.findByPk(req.params.id, {
          order: [['id', 'DESC'], [profileModel, 'id', 'DESC']],
          include: {model: profileModel}})
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
        const errors = error.errors.map(err => err);
        return  res.status(400).send(errors)
      }
    },


    async updateClient(req, res) {
      try{
          const name = req.body.name
          const email = req.body.email
          const clients = await ClientModel.findByPk(req.params.id);
            clients.name = name;
            clients.email = email;
            
              await clients.save();
                res.status(200).send("Client updated");
          }catch(error){
            const errors = error.errors.map(err => err);
          return  res.status(400).send(errors)
                    
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