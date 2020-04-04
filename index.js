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



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Way to go server at port " + port);
});
