const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
let cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/orders", require("./routes/orders"));

mongoose.set("strictQuery", true);
mongoose.set("useFindAndModify", false);
mongoose.set("returnOriginal", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db!");
  app.listen(4000, () => console.log("Server Up and running"));
});
