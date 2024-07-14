// require("dotenv").config({path:"./env"});
import dotenv from "dotenv";
import connectDB from "./db/connection.js";

dotenv.config({ path: "./env" });

connectDB();





















/*
import express, { application } from "express";

const app = express();

( async () => {
    try {
     await mongoose.connect(`${process.env.MONGDB_URI}/${DB_NAME}`)
      app.on('error',(error)=>{
        console.error("Error connecting to database", error);
        process.exit();
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App listening on ${process.env.Port}`);
      })
    } catch (error) {
        console.error("Error ", error);
        throw error;
    }
} )()
*/
