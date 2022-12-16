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

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'));

dotenv.config()


const port = process.env.PORT || 3000 

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {
    req.body.email
})

// Use routers - Can not use before app is called
app.use(InitRouter)
app.use(GenderRouter)
app.use(TypeRouter)
app.use(BrandRouter)
app.use(UserRouter)
app.use(ReviewRouter)
app.use(ProductRouter)
app.use(AuthRouter)


app.listen(3000, () => {
    console.log(`The server is running on localhost:${port}`);
});



