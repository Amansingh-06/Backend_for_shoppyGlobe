const jwt = require('jsonwebtoken');
require('dotenv').config()

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    // user provided no token
    if (!token) {
        return res.status(401).json({msg:"No token , authorization denied"})
    }
    try {
        const decode = jwt.verify(token.split(" ")[1], process.env.secretkey);
        req.user = decode.id;
        next();
        
    } catch (error) {
        return res.status(401).json({ msg: "token is not valid" })
        
    
        
    }
}

module.exports = auth;