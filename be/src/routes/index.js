const UserRouter = require('./UserRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
}

module.exports = routes;