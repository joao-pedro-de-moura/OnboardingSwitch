const multer = require('multer')
const multerConfig = require('../config/multerConfig')
const upload = multer(multerConfig).single('foto')
const profileModel = require('../model/profileModel')

const imageController = {
    
    async store(req, res) {
        
        return upload(req, res, async (error) =>{
            console.log(req.file)
            if(error){
                return res.status(400).json({
                    errors: error.code
                })
            }
            try{
                const url = req.file.location
                const filename = req.file.key
                const {originalname} = req.file
                const {user_id} = req.body
                const foto = await profileModel.create({originalname, user_id , filename, url})
                  return  res.json(foto)
            }catch{
                res.status(400).send('error')
                
            }
        })

    
        }
    }

module.exports = imageController