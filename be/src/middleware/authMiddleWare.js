const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
    console.log(req.headers.token)
    const token = req.headers.token.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(403).json({
                status: 'ERR',
                message: 'Token không hợp lệ'
            });
        }
        const { payload } = user;
        if(payload.isAdmin) {
            next();
        } else {
            return res.status(403).json({
                status: 'ERR',
                message: 'Token không phải admin'
            });
        }
    });
}

module.exports = {
    authMiddleWare
}