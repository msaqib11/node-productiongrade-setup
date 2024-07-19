import express, { urlencoded } from "express"
import cors from "cors"
import { LIMIT } from "./constants.js"
import cookieParser from "cookie-parser"

const app = express()


//middleware for CORS
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

// Middleware to parse incoming JSON requests with a limit of 16kb

app.use(express.json({
    limit: LIMIT //16kb from constants
}))

// Middleware to parse incoming URL-encoded requests

app.use(urlencoded({
    extended:true,
    limit : LIMIT //16kb from constants
}))


// Middleware to serve static files from the "public" directory
app.use(express.static("public"))


// Middleware to parse cookies from the HTTP request
app.use(cookieParser())

export default app