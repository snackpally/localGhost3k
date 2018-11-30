const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const location = require('../routes/location.route');
const app = express();
app.use('/location', location);


app.listen(3001, function(){
	console.log('Server is running on 3001');
})