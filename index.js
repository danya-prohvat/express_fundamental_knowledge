import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"

const PORT = 4000
const dbURL = 'mongodb+srv://prokhtvatilov:1234@cluster0.nbahm.mongodb.net/?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(dbURL)
        app.listen(PORT, () => console.log('Server started on PORT:' + PORT))
    } catch (e) {
        console.log(e); 
    }
}

start() 