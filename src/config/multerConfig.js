const multer = require('multer')
const {extname, resolve} = require('path')

const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const path = require('path')

const s3 = new aws.S3()


   const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'jp-bucket-switch',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
           
            cb(null, `${Date.now()}_${extname(file.originalname)}`)
        },
       
        
    }) ,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) =>{
        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg' ){
            return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPEG"))
        }
        return cb(null, true)
    },
    
})

module.exports = upload