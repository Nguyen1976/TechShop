const jwt = require('jsonwebtoken');


//Kiểm tra admin
const authMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(403).json({
                status: 'ERR',
                message: 'Token không hợp lệ'
            });
        }
        if(user?.isAdmin) {
            next();
        } else {
            return res.status(403).json({
                status: 'ERR',
                message: 'Token không phải admin'
            });
        }
    });
}

//Sử dụng khi muốn lấy thông tin chi tiết của người dùng
const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(403).json({
                status: 'ERR',
                message: 'Token không hợp lệ'
            });
        }
        if(user?.isAdmin || user?.id === userId) {
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
    authMiddleWare,
    authUserMiddleWare
}