import express from 'express'
import sequelize from '../config/sequelize.config.js'
const InitRouter = express.Router()

// import SizeModel from '../models/size.model.js'

InitRouter.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export default InitRouter