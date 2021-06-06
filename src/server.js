const express = require('express');
const exphbs = require('express-handlebars');
const hbs = require('express-handlebars');
const path = require('path');

// Inicializadores
const app = express();

// Ajustes
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// Middlewars
app.use(express.urlencoded({
    extended: false
}));

// Variables globales

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;