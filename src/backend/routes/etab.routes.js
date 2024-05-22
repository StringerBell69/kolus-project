const express = require("express");
const { setEtabs,getEtabById , getEtabs,getEtabByType,getEtabByVille ,getEtabByTypeAndVille, deleteEtab ,editEtab } = require('../controlers/etab.controller');

const app = express();

app.get("/", (req, res) => {
    getEtabs(req, res);  
});

app.get("/:id", (req, res) =>{
    getEtabById(req, res); 
});

app.get("/ville/:location", (req, res) => {
    getEtabByVille(req, res);
});

app.get("/type/:etablissement_type", (req, res) => {
    getEtabByType(req, res);
});

app.get("/type/:etablissement_type/ville/:location", (req, res) => {
    getEtabByTypeAndVille(req, res);
});

app.put("/:id", (req, res) => {
    editEtab(req, res);
});

app.delete("/:id", (req, res) => {
    deleteEtab(req, res);
});

app.delete("/ville/:location", (req, res) => {
    deleteEtabByVille(req, res);
});

app.delete("/type/:etablissement_type", (req, res) => {
    deleteEtabByType(req, res);
});

app.post("/", (req, res) => {
    setEtabs(req, res);
});







module.exports = app;