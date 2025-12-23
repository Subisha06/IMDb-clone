require("dotenv").config();
const express =require("express");
const dbconnect=require("./dbConnect");
const movieRoutes = require("./routes/movie");
const cors =require("cors");
const app=express();

dbconnect();

app.use(express.json());
app.use(cors());
app.use("/api",movieRoutes);

const port =process.env.PORT||8080;
app.listen(port, () =>console.log(`listening on port ${port}...`));