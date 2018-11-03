const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header['x-access-token'] || req.body.token || req.query.token;
    if (token) {
        jwt.verify(token, req.app.get('api_secret_key'),(err , decoded) => {
            if(err){
                res.json({
                   status: 0,
                   data: "token"
                });
            }else{
                req.decode = decoded;
                next();
            }
        });
    } else {
        res.json({
            status: 0,
            data: "token"
        });
    }
};