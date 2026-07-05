const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = async(req, res, next)=>{
 try{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message: "token not found"})
    }

    const decoded = jwt.verify(token , process.env.secret_key)
    req.user = decoded
    next()
 }catch(err){
    res.status(401).json({ message: "Invalid or expired token"})
 }
}

module.exports = auth