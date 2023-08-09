const viewPath = require('../utils/path');
exports.getAddProduct = (req, res, next) => {  
    res.sendFile(viewPath('add-product.html'));
    }

exports.postAddProducts = (req, res, next) => {
    console.log('Product Title:', req.body.title);
    console.log('Product Size:', req.body.size);
    res.redirect('/');
  } 
  
exports.getProducts = (req, res, next) => {
    
    res.sendFile(viewPath('shop.html'));
}