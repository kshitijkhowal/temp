import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./src/lib/db.js";
import bookRoute from "./route/book.route.js";
import cors from "cors";


dotenv.config();

const app=express();
app.use(cors());

const PORT=process.env.PORT


//defining routes
app.use("/book",bookRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})