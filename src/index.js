import express from 'express'
import settingApplication from './config/middleware.js'
import initRouters from './config/router'


const app = express()

settingApplication(app)
initRouters(app)

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})