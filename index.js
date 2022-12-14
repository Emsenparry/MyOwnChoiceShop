import express from 'express'
import dotenv from 'dotenv'

// Import Routes
import InitRouter from './routes/init.router.js'
import GenderRouter from './routes/gender.router.js'
import SizeRouter from './routes/size.router.js'
import TypeRouter from './routes/type.router.js'
import BrandRouter from './routes/brand.router.js'
import UserRouter from './routes/user.router.js'
import ReviewRouter from './routes/review.router.js'
// import ProductRouter from './routes/product.router.js'


const app = express();
app.use(express.urlencoded({ extended: true }))

dotenv.config()


const port = process.env.PORT || 3000 


app.get('/', (req, res) => {
    res.send('Hi');
})

// Use routers - Can not use before app is called
app.use(InitRouter)
app.use(GenderRouter)
app.use(SizeRouter)
app.use(TypeRouter)
app.use(BrandRouter)
app.use(UserRouter)
app.use(ReviewRouter)
// app.use(ProductRouter)


app.listen(3000, () => {
    console.log(`The server is running on localhost:${port}`);
});


