// importing express.js module
import express from 'express';
import cors from 'cors';
import path from 'path';
import BOOKS from './books';



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

// GET REQUEST
app.get('/books', (req,res)=>{
    res.json(BOOKS)
})

// GET REQUEST VIA ID
app.get('/books/id',(req, res) => { 
    const {id} = req.params;
    console.log(id);
})




//pwd Middleware shows what path express is on
const _dirname = path.resolve

// make the gitserver listen on port number
app.listen(port, () => {
  console.log(`apiproj app listening on port ${port}`);
});