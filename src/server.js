const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
app.use(cors());


app.listen(3001, function(){
	'Server is running on 3001'
})