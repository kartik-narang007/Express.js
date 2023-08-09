const viewPath = require('../utils/path');

exports.contact = (req, res, next) => {
    res.sendFile(viewPath('contact-us.html'));
}

exports.sucess = (req, res, next) => {
    res.sendFile(viewPath('success.html'));
}