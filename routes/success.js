const path = require('path');

const express = require('express');

const router = express.Router();

const viewPath = require('../utils/path');

const successControllers = require('../controllers/contactus');

router.post('/success', successControllers.sucess);
  
    module.exports = router;