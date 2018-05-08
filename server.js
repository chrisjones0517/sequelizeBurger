const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();
const db = require("./models");

const app = express();
const public = require('path').join(__dirname, '/public');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const routes = require('./controllers/burgers_controller.js');

const PORT = process.env.PORT || 3000;

app.use('/', routes);

db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});
