/**
 * Importing all the necessary pacakages that is used for this project
 */
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'


// Import Routes
import InitRouter from './routes/init.router.js'
import GenderRouter from './routes/gender.router.js'
import TypeRouter from './routes/type.router.js'
import BrandRouter from './routes/brand.router.js'
import UserRouter from './routes/user.router.js'
import ReviewRouter from './routes/review.router.js'
import ProductRouter from './routes/product.router.js'
import { router as AuthRouter } from './routes/authenticate.router.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create variable called app that can use the express method
const app = express();
// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

app.use (express.static(__dirname + '/views'));
dotenv.config()

// Create variable where it takes PORT from our dotenv file or the 3000 
// if it cant get to the dotenv file
const port = process.env.PORT || 3000 

app.set('view-engine', 'ejs')
/**
 * The different paths for our login system
 */
app.get('/', ( req, res) => {
     res.render('index.ejs');
})
app.get('/login', ( req, res) => {
     res.render('login.ejs');
})
app.post('/login', ( req, res) => {
})
app.get('/register', ( req, res) => {
     res.render('register.ejs');
})
app.post('/register', ( req, res) => {
     req.body.email    
})

// Use routers - Can not be used before app is called
app.use(InitRouter)
app.use(GenderRouter)
app.use(TypeRouter)
app.use(BrandRouter)
app.use(UserRouter)
app.use(ReviewRouter)
app.use(ProductRouter)
app.use(AuthRouter)


// The port we're listening to
app.listen(3000, () => {
    console.log(`The server is running on localhost:${port}`);
});