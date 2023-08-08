const path = require('path');

const express = require('express');

const router = express.Router();

const viewPath = require('../utils/path');

router.post('/success', (req, res, next) => {
    
    res.sendFile(viewPath('success.html'));
    });
  
    module.exports = router;