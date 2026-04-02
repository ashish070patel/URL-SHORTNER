const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connection")
const { checkForAuthentication, restrictTo, } = require('./middlewares/auths')
const URL = require ("./models/url");

const urlRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")

const app = express();
const PORT = 8001;

//connect to databases
connectToMongoDB("mongodb://127.0.0.1:27017/Short_Url_DB")
.then(() => console.log("MongoDB Connected!"));

//ejs 
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

//Routes
app.use("/url", restrictTo(["NORMAL","ADMIN"]), urlRoutes);
app.use("/user", userRoute);
app.use("/", staticRoute);


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));