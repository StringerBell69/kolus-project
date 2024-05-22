const express = require("express");
const port = 5000;
const path = require('path');
const app = express();
const cors = require('cors')

const pathToPublic = path.join(__dirname, '..','..','public');

app.use(express.static(pathToPublic));



app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());


app.use("/etab" , require("./routes/etab.routes"));

app.listen(port, ()=>{
    console.log("Serveur OK !")
} );

