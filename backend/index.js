import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./src/lib/db.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
import path from "path"

dotenv.config();

const app=express();
app.use(cors());
const __dirname=path.resolve();

app.use(express.json());

const PORT=process.env.PORT


//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

// deployment
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"../frontend","dist","index.html"));
    })
}

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})