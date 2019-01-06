const express = require('express');
const router = express.Router();
const contact_controller = require('../controllers/contact.controller');

router.post('/newContact', contact_controller.new_Contact);

router.get('/allComments', contact_controller.getComments);

module.exports = router;
