const path = require('path');
const express = require('express');


const router = express.Router();


const viewPath = require('../utils/path');

router.get('/', (req, res, next) => {
    
  res.sendFile(viewPath('shop.html'));
  });

  module.exports = router;