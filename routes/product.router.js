import express from 'express'
import ProductController from '../controllers/product.controller.js'

// express.Router() -> Creates a const which calls the router method
const ProductRouter = express.Router()
const controller = new ProductController

//GET - LIST
/**
 * Calls method GET with an endpoints which afterwards calls the (req and) res objects.
 * List only have 1 argument which is res
 */
ProductRouter.get('/product', (req, res) => {
    controller.list(req, res)
})
ProductRouter.get('/product/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
ProductRouter.post('/product', (req, res) => {
    controller.create(req, res)
})
ProductRouter.put('/product/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
ProductRouter.delete('/product/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export default ProductRouter