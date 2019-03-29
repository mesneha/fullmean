var express = require('express');
var mongoose = require('mongoose');
//var router = express.Router(); //middleware-Router

const route = require('./router/router');


mongoose.connect('mongodb://localhost:27017/mydb')
mongoose.connection.on( ' connected' , ()=>
{
    console.log( ' mongodb connected on the port')
});

var app=  express();

var cors = require('cors');
app.use(cors());

// router.get();
// router.post();
// router.delete(); methods

app.get('/',  function(req, res) {

    res.send('Hello from Root Path ');
});

//it should be added before route parsing
app.use(express.json());

//add an middleware to congiure the route
app.use('/api' , route);
//use is used as middleware

const port = process.env.PORT ||5000;
app.listen( port , function(){

    console.log('Server started on port number ' + port);
})