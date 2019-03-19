const mongoose = require('mongoose').set('debug', true);
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

//import routes for project

const location = require('../Server_routes/location.route');
const contact = require('../Server_routes/contact.route');
//set up express server
const app = express();
app.use(cors('*'));

//set mongoose to connect with mlab remote database
let dev_db_url = 'mongodb://zviente:zack1123@ds038888.mlab.com:38888/localghost3k';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Express Session
app.use(
  session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  })
);

//Routes
app.use('/location', location);
app.use('/contact', contact);

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}

app.listen(port, function() {
  console.log('Server is running on: ', port);
});
