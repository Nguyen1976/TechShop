const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '1d' })
    return access_token;
}

const generalRefreshToken = (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' })

    return access_token;
}

const refreshToken = (token) => {
    return new Promise( (resolve, reject) => {
        try {
            // const user = await User.findOne({_id: id});
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if(err) {
                    resolve({
                        status: 'ERR',
                        message: 'Token không hợp lệ'
                    })
                }
                const { payload } = user
                const access_token = await generalAccessToken({
                    id: payload?.id,
                    isAdmin: payload?.isAdmin
                });
                resolve({
                    status: 'OK',
                    message: 'refreshToken success',
                    access_token
                })
            })
        } catch (e) {
            reject(e);
        }
    })
}



module.exports = {
    generalAccessToken,
    generalRefreshToken,
    refreshToken
}