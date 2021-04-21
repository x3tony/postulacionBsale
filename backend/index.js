if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv');
    dotenv.config();
}
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');



const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/product', require('./routes/product'));
app.use('/api/category', require('./routes/category'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});