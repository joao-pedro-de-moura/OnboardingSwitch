const multer = require('multer')
const {extname, resolve} = require('path')
module.exports = {
    fileFilter: (req, file, cb) =>{
        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg' ){
            return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPEG"))
        }
        return cb(null, true)
    },

    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'))
        },
        limits: {
            fileSize: 2 * 1024 * 1024,
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${extname(file.originalname)}`)
        }
    })

}