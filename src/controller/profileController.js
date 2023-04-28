const multer = require('multer')
const multerConfig = require('../config/multerConfig')
const upload = multer(multerConfig).single('foto')
const profileModel = require('../model/profileModel')

const imageController = {
   
    async store(req, res) {
        return upload(req, res, async (error) =>{
            if(error){
                return res.status(400).json({
                    errors: error.code
                })
            }
        const {originalname, filename} = req.file
        const {user_id} = req.body
        const foto = await profileModel.create({originalname, user_id , filename })

          return  res.json(foto)
        })

    
        }
    }

module.exports = imageController