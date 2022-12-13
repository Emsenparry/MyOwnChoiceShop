import express from 'express'
import dotenv from 'dotenv'

// Import Routes
import InitRouter from './routes/init.router.js'



dotenv.config()

const port = process.env.PORT || 3000 

const app = express();
app.use(express.urlencoded({ extended: true }))

// Use routers - Can not use before app is called
app.use(InitRouter)

app.listen(3000, () => {
    console.log(`The server is running on localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hi');
})

