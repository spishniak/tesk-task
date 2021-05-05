import express from 'express'
import morgan from 'morgan'

function settingApplication(app) {
    app.use(express.json())
    app.use(morgan('dev'))
}