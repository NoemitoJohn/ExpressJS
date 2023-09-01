const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.render('index',  {
    })
})

app.listen(3000);