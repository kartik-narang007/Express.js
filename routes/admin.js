const path = require('path');

const express = require('express');

const router = express.Router();

const controllersRoutes = require('../controllers/product');

router.get('/add-product', controllersRoutes.getAddProduct);
  
router.post('/add-product', controllersRoutes.postAddProducts);

module.exports = router;