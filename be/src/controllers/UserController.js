const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await UserService.createUser(req.body); //đợi service xử lý logic
        return res.status(200).json({
            message: 'User created successfully',
            data: user // Trả về dữ liệu người dùng đã tạo
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message // Hiển thị lỗi chi tiết hơn
        });
    }
}

module.exports = {
    createUser
}
