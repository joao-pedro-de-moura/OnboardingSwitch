const  jwt  = require('jsonwebtoken');
const clientsModal = require('../model/clientsModel');

module.exports = async (req, res, next) =>{
   
    const {authorization} = req.headers
    
    if(!authorization){
        res.status(401).send("Login error")
    }
    
    const [text, token] = authorization.split(' ')
    
    try{
       const data = jwt.verify(token, "efmjnakljfnkef")
        const {id} = data
        console.log(data)
        
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
        if(id === req.params){return next()
            
        }else{return res.status(401).json({
            erros: ['Token invalid']
        })}

        
    }catch{
        return res.status(401).json({
            erros: ['Login Failed']
        })
    }
  
} 