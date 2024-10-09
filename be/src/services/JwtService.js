const jwt = require('jsonwebtoken')

const generalAccessToken = (payload) => {
    console.log('payload', payload);
    const access_token = jwt.sign({
        payload
    }, 'access_token', { expiresIn: '1h' })

    return access_token;
}

const generalRefreshToken = (payload) => {
    console.log('payload', payload);
    const access_token = jwt.sign({
        payload
    }, 'refresh_token', { expiresIn: '365d' })

    return access_token;
}

module.exports = {
    generalAccessToken,
    generalRefreshToken
}