import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "../server/routes/Route.js";
import http from "http";

const app = express();
const server = http.createServer(app);


app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL || 5000;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB Connected Successfully.");
    server.listen(PORT,()=>{
        console.log(`server is running on port : ${PORT}`);
    })

}).catch((error) => console.log(error));

app.use("/api",route);