const  jwt  = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    const {authorization} = req.headers

    if(!authorization){
        res.status(401).send("Login error")
    }
    
    const [text, token] = authorization.split(' ')

    try{
        data = jwt.verify(token, "efmjnakljfnkef")
        const {id, email} = data
        req.id =id
        req.email = email
        return next()
    }catch{
        res.status(401).send("Login error")
    }

}