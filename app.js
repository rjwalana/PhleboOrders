const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
let cors = require("cors");

require("aws-sdk/lib/maintenance_mode_message").suppress = true;

// file upload middleware
app.use(fileUpload());

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/orders", require("./routes/orders"));

mongoose.set("strictQuery", true);
mongoose.set("useFindAndModify", false);
mongoose.set("returnOriginal", false);
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
    app.listen(4000, () => console.log("Server Up and running"));
  }
);
