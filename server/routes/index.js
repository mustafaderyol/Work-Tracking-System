const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});

router.get('/authenticate', (req, res, next) => {
    const {email, password} = req.body;

    User.findOne({email}, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            res.json({
                data: "User not found",
                status: 0
            });
        }else{
            bcrypt.compare(password, user.password).then((result) => {
                if(!result){
                    res.json({
                        data: "wrong password",
                        status: 0
                    });
                }else{
                    const payload = user;
                    const token = jwt.sign(payload, req.app.get('api_secret_key'), {
                        expiresIn:720 // 12 saat
                    });

                    res.json({
                        status:1,
                        token
                    });
                }
            });
        }
    });
});

module.exports = router;
