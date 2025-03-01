const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
const userRoutes =require("./routes/userRoutes");
dotenv.config();
const app = express();
app.use(express.json());
const PORT=process.env.PORT;

// routes
app.use("/auth",userRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectToDb();
});

