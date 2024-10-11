const User = require("../models/UserModel");
const bcrypt = require('bcrypt');
const { generalAccessToken, generalRefreshToken } = require("./JwtService");

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser;
        try {
            const checkUser = await User.findOne({ 
                email: email
            });
            if(checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'Email đã tồn tại',
                });
            }
            const hash = bcrypt.hashSync(password, 10);//mã hóa mật khẩu và lưu vào database
            console.log(hash);
            const createUser = await User.create({
                name,
                email,
                password: hash,
                confirmPassword: hash,
                phone
            })
            if(createUser) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createUser
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}
const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin;
        try {
            const checkUser = await User.findOne({ 
                email: email
            });
            if(checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'User không tồn tại',
                });
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password);
            
            if(!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'Mật khẩu hoặc tài khoản không đúng',
                })
            }
            const access_token = await generalAccessToken({
                id: checkUser._id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await generalRefreshToken({
                id: checkUser._id,
                isAdmin: checkUser.isAdmin
            })

            resolve({
                status: 'OK',
                message: 'Success',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e);
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({_id: id});

            if(checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'User không tồn tại',
                });
            }

            const updateUser = await User.findByIdAndUpdate(id, data, { new: true });

            resolve({
                status: 'OK',
                message: 'Success',
                data: updateUser
            })
        } catch (e) {
            reject(e);
        }
    })
}
const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({_id: id});

            if(checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'User không tồn tại',
                });
            }

            await User.findByIdAndDelete(id);

            resolve({
                status: 'OK',
                message: 'delete user success',
            })
        } catch (e) {
            reject(e);
        }
    })
}

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find();

            resolve({
                status: 'OK',
                message: 'get all user success',
                data: allUser
            })
        } catch (e) {
            reject(e);
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({_id: id});

            if(user === null) {
                return resolve({
                    status: 'OK',
                    message: 'User không tồn tại',
                });
            }

            resolve({
                status: 'OK',
                message: 'get details user success',
                data: user
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser
}