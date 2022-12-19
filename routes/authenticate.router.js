import express from 'express'
import AuthenticateController from '../controllers/authenticate.controller.js'
import verifyToken from '../middleware/verifytoken.js';
const router = express.Router()

const controller = new AuthenticateController();

router.post('/signin', (req, res) => { controller.login(req, res)})
router.get('/protected', verifyToken, (req, res) => { controller.protected(req, res)})

export { router }