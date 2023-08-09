const viewPath = require('../utils/path');
exports.page404 = (req, res, next) =>{
    res.status(404).sendFile(viewPath('page-not-found.html'));
  };