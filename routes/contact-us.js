const path = require('path');
const express = require('express');


const router = express.Router();


const viewPath = require('../utils/path');
const contactControllers = require('../controllers/contactus');

router.get('/contact-us', contactControllers.contact);

  module.exports = router;