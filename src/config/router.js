const giphyRouter = require("../components/giphy/giphy.router")


function initRouters(app) {
    app.use('/', giphyRouter)
}

module.exports = initRouters
