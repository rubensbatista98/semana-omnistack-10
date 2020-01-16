const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

const CONNECTION_URL =
  "mongodb+srv://devman:devman@cluster0-cjekm.mongodb.net/week10?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
