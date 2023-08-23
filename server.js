// importing express.js module
const express = require('express');
//create an object of the express module
const app = express();
//set the port to 3000
const port = 3000;

// Middleware function goes here....
app.use(cors());

//Routing goes here....
app.get('/', (req, res) => {
    res.send("Welcome to Samelias Api")
})


// make the server listen on port number
app.listen(port, () => {
  console.log(`apiproj app listening on port ${port}`);
});