// const connection = require("./service/connect_mongo")
const cors = require("cors");
const express = require("express");
const productRoute = require("./routes/product_route");
const bodyParser = require("body-parser");
require("dotenv/config");

//connection to mongodb
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors);

app.use("/", productRoute);

console.log("runing boy!!!!!!!!!!");
app.listen(8080);
