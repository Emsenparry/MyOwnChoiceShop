import express from 'express'
import dotenv from 'dotenv'


dotenv.config()

const port = process.env.PORT || 3000 

const app = express();
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log(`The server is running on localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hi');
})

