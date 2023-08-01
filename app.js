import mongoose from "mongoose";
import express from 'express';
import userRouter from "./routes/User-routes";
import BookRouter from "./routes/Books-routes";


const app = express();


app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/book", BookRouter);


mongoose
    .connect("mongodb+srv://shuklavikas379:xCVCKbui6crBzRUf@cluster0.6yfxjzi.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>app.listen(5000))
    .then(()=>console.log("Connected to Database and listening on port number:5000!!!"))
    .catch((err)=>console.log(err));



   













// xCVCKbui6crBzRUf    password