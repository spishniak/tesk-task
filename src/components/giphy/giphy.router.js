const giphyRouter = new require('express').Router()
const giphyService = require('./giphy.service')

giphyRouter.get('/search', async (req, res) => {
    const searchQuery = req.query.search
    const gifs = await giphyService.search(searchQuery)
    res.render('gifs.ejs', { gifs })
})

app.use('/', (req, res) => {
    res.render('welcome.ejs')
})

module.exports = giphyRouter;
