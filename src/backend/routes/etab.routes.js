const express = require("express");
const { setEtabs, getEtabs, deleteEtab ,editEtab } = require('../controlers/etab.controller');
const router = express.Router()

router.get("/", getEtabs=>{
    
});

router.get("/:id", getEtabById=>{
    
});

router.put("/:id", editEtab=>{
    
});

router.delete("/:id", deleteEtab=>{
    
});

router.post("/", setEtabs=>{
    
});







module.exports = router;