import express from "express";
import connection,{disconnect} from "./config/signupdb.config.js"
import "dotenv/config";
import router from "./router/signup.router.js";
import cors from "cors"
const app = express()
const port = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use("/" , router)

app.listen(port , async() => {
    console.log("Server Running at port " + port);
    await connection()
})
process.on("SIGINT" , disconnect);
process.on("SIGTERM" , disconnect);
