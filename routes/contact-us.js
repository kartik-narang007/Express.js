const path = require('path');
const express = require('express');


const router = express.Router();


const viewPath = require('../utils/path');

router.get('/contact-us', (req, res, next) => {
    
  res.sendFile(viewPath('contact-us.html'));
  });

  module.exports = router;