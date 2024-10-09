const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const isCheckEmail = reg.test(email);
        if(!name || !email || !password || !confirmPassword || !phone) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Vui lòng điền đầy đủ thông tin'
            })
        } else if(!isCheckEmail) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Email không đúng định dạng'
            })
        } else if(password !== confirmPassword) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Mật khẩu và xác nhận mật khẩu không khớp'
            });
        }
        const userResponse  = await UserService.createUser(req.body); //đợi service xử lý logic
        return res.status(200).json(userResponse);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const isCheckEmail = reg.test(email);
        if(!name || !email || !password || !confirmPassword || !phone) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Vui lòng điền đầy đủ thông tin'
            })
        } else if(!isCheckEmail) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Email không đúng định dạng'
            })
        }
        const userResponse  = await UserService.loginUser(req.body); //đợi service xử lý logic
        return res.status(200).json(userResponse);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

module.exports = {
    createUser,
    loginUser
}
