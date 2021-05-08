import giphyRouter  from "../components/giphy/giphy.router.js"


function initRouters(app) {
    app.use('/', giphyRouter)
}

export default initRouters
