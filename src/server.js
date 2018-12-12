const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
//do we need cors?
const cors = require("cors");

//import routes for project
const user = require("../routes/user.route");
const location = require("../routes/location.route");
// const comment = require("../routes/comment.route");
//set up express server
const app = express();
app.use(cors("*"));

//set mongoose to connect with mlab remote database
let dev_db_url = "mongodb://zviente:zack1123@ds038888.mlab.com:38888/localghost3k";

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.once("open", () => console.log("Connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);

//Passport init
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/location", location);
// app.use("/comment", comment);
app.use("/user", user);

app.listen(3001, function() {
  console.log("Server is running on 3001");
});
