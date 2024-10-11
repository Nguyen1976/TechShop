const UserService = require('../services/UserService');
const JwtService = require('../services/JwtService');

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

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;

        if(!userId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Lỗi không có userId'
            })
        }

        const userResponse  = await UserService.updateUser(userId, data);
        return res.status(200).json(userResponse);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const token = req.heaers;
        if(!userId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Lỗi không có userId'
            })
        }

        const userResponse  = await UserService.deleteUser(userId);
        return res.status(200).json(userResponse);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const getAllUser = async (req, res) => {
    try {

        const userResponse  = await UserService.getAllUser();

        return res.status(200).json(userResponse);
        
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const getDetailsUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if(!userId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Lỗi không có userId'
            })
        }

        const userResponse  = await UserService.getDetailsUser(userId);
        return res.status(200).json(userResponse);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

const refreshToken = async (req, res) => {
    try {
        const token = req.heaers.token.split(' ')[1];
        if(!token) {
            return res.status(400).json({
                status: 'ERR',
                message: 'Không có token'
            })
        }

        const userResponse  = await JwtService.refreshToken(token);
        return res.status(200).json(userResponse);
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}





module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    refreshToken
}
