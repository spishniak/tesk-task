import express from 'express'
import settingApplication from './config/middleware.js'
import giphyService from './components/giphy/giphy.service.js'

const app = express()
settingApplication(app)





app.get('/search', async (req, res) => {
    const searchQuery = req.query.search
    const gifs = await giphyService.search(searchQuery)
    res.render('gifs.ejs', { gifs })
})

app.use('/', (req, res) => {
    res.render('welcome.ejs')
})





app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})