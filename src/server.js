const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

//import routes for project
const location = require('../routes/location.route');
//set up express server
const app = express();

//set mongoose to connect with mlab remote database
let dev_db_url = 'mongodb://zviente:zack1123@ds038888.mlab.com:38888/localghost3k';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/location", location);

app.listen(3001, function(){
	console.log('Server is running on 3001');
})