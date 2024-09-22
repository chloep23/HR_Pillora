const express = require("express"); 
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const http = require("http"); // new
// const { Configuration, OpenAIApi } = require('openai');
// connect to the database
connectDB();
// require routers
const userRoutes = require("./routes/userRoutes")
const medicationRoutes = require('./routes/medicationRoutes');
const chatRoutes = require('./routes/chatRoutes')

// create an App
const app = express();
const server = http.createServer(app);

// Setup and Error Handling
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/user", userRoutes);
app.use("/api/medications", medicationRoutes);
app.use("/api/chat", chatRoutes);

server.listen(port, () => console.log(`Server started on port ${port}`));
