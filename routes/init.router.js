import express from 'express'
import sequelize from '../config/sequelize.config.js'
const InitRouter = express.Router()

import BrandModel from '../models/brand.model.js'
import GenderModel from '../models/gender.model.js'
import ProductModel from '../models/product.model.js'
import ReviewModel from '../models/review.model.js'
import TypeModel from '../models/type.model.js'
import UserModel from '../models/user.model.js'
/**
 * Syncronise our database with our models
 */
InitRouter.get('/init', (req, res) => {
    try {
        // When we call sync(), it creates a table from our models IF IT DOESNT ALREADY EXSIST
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export default InitRouter