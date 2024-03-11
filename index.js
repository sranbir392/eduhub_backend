const express = require("express");
const cors = require("cors");

const { Router } = require("./routers/routers");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
const mongoose =require("mongoose");
require("dotenv").config();

const connection=mongoose.connect(process.env.MONGOSHURL);

app.use("", Router);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server connection with ${process.env.PORT}`);
    console.log("database connected")
  } catch (err) {
    console.log("not connected");
  }
});

