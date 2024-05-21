const express = require("express")
const port = 5000;
const path = require('path');
const app = express();

const pathToPublic = path.join(__dirname, '..','..','public');

app.use(express.static(pathToPublic));


app.get("/MOCK_DATA.json", (req, res) => {
    res.sendFile(path.join(pathToPublic, 'MOCK_DATA.json'));
});

app.listen(port, ()=>{
    console.log("Serveur OK !")
} )

