const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const viewPath = require('./utils/path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact-us')
const successRoutes = require('./routes/success')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));



app.use(shopRoutes);
app.use('/admin',adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);
const pagenotfoundControllers = require('./controllers/404');
app.use(pagenotfoundControllers.page404);

app.listen(3000);
