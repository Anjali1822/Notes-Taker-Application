const notes = require('./data/notes');
const express = require("express");  //import Express
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//brings data from backed to frontend & serves it
app.get("/",(req,res)=>{
    res.send("API is running..");                              //create api endpoint 
});

app.get('/api/notes',(req,res) =>{
    res.json(notes);        //all data is fectched
});

app.get('/api/notes/:id', (req,res)=>{                       //only one notes is fectched with id
    const note = notes.find((n) => n._id === req.params.id);       
    res.send(note);
});

const PORT= process.env.PORT || 5000;                //Port from env file - it will use port from env file not found then it run on 5000

app.listen(PORT,console.log(`Server started on PORT ${PORT}`)); //web Server is Created 