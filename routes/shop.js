const path = require('path');
const express = require('express');


const router = express.Router();


const controllersRoutes = require('../controllers/product');

router.get('/', controllersRoutes.getProducts);

  module.exports = router;