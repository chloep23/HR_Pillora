const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;
const colors = require("colors"); // colors in terminal
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const http = require("http"); // new

// connect to the database
connectDB();

// create an App
const app = express();
const server = http.createServer(app);

// Setup and Error Handling
app.use(errorHandler);
app.use(
  cors({
    orgin: "http://localhost:8080",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

server.listen(port, () => console.log(`Server started on port ${port}`));
