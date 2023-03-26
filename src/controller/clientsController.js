import ClientModel from "../model/clientsModel.js";

const clientController = {
    async allClient(req, res) {
        const client = await ClientModel.findAll();
        res.json(client);
      },
    async oneClient(req, res) {
        
        const client = await ClientModel.findByPk(req.params.id);
        res.json(client);
      },
    async createClient(req, res){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const client = await ClientModel.create({ name, email, password})
        return res.json(client)
    },
    async updateClient(req, res) {
      const name = req.body.name
      const email = req.body.email
      const password = req.body.password
      const clients = await ClientModel.findByPk(req.params.id);
      clients.name = name;
      clients.email = email;
      clients.password = password;
      await clients.save();
      res.json(clients);
    },
    async deleteClient(req, res) {
      const clients = await ClientModel.findByPk(req.params.id);
      await clients.destroy();
      res.json(clients);
    }
}

export default clientController;