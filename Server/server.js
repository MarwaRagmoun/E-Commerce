import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/mongoDb.js";

import { errorHandler, notFound } from "./Middleware/Errors.js";



dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API

app.use(notFound);
app.use(errorHandler);



app.get("/",(req,res)=>{
    res.send("API is running... ");
});

const PORT = process.env.PORT || 1000 ;



app.listen(PORT,console.log(`server running in port ${PORT}`));