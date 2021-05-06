import express from 'express'
import morgan from 'morgan'

function settingApplication(app) {
    app.use(express.json())
    app.use(morgan('dev'))
    app.set("view engine", "ejs")
}










export default  settingApplication