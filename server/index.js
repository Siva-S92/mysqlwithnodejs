import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { contentRouter } from './routes/contentRouter.js';
import { connectMysqlDB } from './config/database.js';



//dotenv config
dotenv.config();


//app config
const app = express();
const PORT  = process.env.PORT;


// middlewares
app.use(express.static('uploads'))
app.use(express.json({limit: '60mb'}))
app.use(express.urlencoded({extended: true, limit: '60mb'}))
app.use(cors({
    origin: "*"
}))


// database connection
connectMysqlDB()


// routes
app.get("/", async(req, res) => res.send("backend started"))
app.use("/api", contentRouter)


// Server listerning
app.listen(PORT, () => {
    console.log(`server running on the port ${PORT}`)
})
