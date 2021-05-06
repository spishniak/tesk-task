import express from 'express'
import settingApplication from './config/middleware.js'

const app = express()
settingApplication(app)





app.get('/search', (req, res) => {
    const searchQuery = req.query
    
    res.render('welcome.ejs', {
        gifLink: "https://i.gifer.com/origin/ed/ed7843c794b34fe4fc95260a9231625a.gif",
    })
})

app.use('/', (req, res) => {
    res.render('welcome.ejs')
})





app.listen(3000, () => {
    console.log('server is running..')
})