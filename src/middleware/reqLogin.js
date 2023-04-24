const  jwt  = require('jsonwebtoken');
const clientsModal = require('../model/clientsModel');

module.exports = async (req, res, next) =>{
   
    const {authorization} = req.headers

    if(!authorization){
        res.status(401).send("Login error")
    }
    
    const [text, token] = authorization.split(' ')

    try{
        data = jwt.verify(token, "efmjnakljfnkef")
        const {id} = data
        console.log(req.params)
        const user = await clientsModal.findOne({
            where:{
                id
            }
        
        })
      
        if(!user){
            return res.status(401).json({
                erros: ['Token invalid']
            })
        }
        return next()
    }catch{
        return res.status(401).json({
            erros: ['Login Failed']
        })
    }

}