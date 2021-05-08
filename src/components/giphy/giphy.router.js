import express from 'express';
import giphyService from './giphy.service.js'

const giphyRouter = new express.Router()

giphyRouter.get('/search', async (req, res) => {
    const searchQuery = req.query.search
    const gifs = await giphyService.search(searchQuery)
    res.render('gifs.ejs', { gifs })
})

giphyRouter.use('/', (req, res) => {
    res.render('welcome.ejs')
})

export default giphyRouter;
