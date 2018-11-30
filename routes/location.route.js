const express = require('express');
const router = express.Router();

const location_controler = require('../controllers/location.controller');

router.get('/test' , location_controler.test);

module.exports = router;