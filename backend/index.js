const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();

//settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/product', require('./routes/product'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});