const express = require('express');
const hbs = require('express-handlebars');

const UserController = require('./UserController');

const app = express();

// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'main'
}));

app.get('/', UserController.getUser);




app.listen(5000, console.log(`started listening on 5000`));