//importing express module
const express = require('express');
const app = express();
//port number
const port = 8000;

//using express router
app.use('/', require('./routes'));

//Setting-up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Firing up express server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});