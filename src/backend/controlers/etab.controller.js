const fs = require('fs');
const path = require('path');
const pathToPublic = path.join(__dirname, '..','..');
const dataPath = path.join(pathToPublic, 'MOCK_DATA.json');


const readData = () => {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
};


exports.getEtabs =  (req, res)=>{
    
    const etabs =  readData();
    res.status(200).json(etabs);
};

exports.getEtabById =  (req, res)=>{

    
    const etabs =  readData();
    const etab = etabs.find(x => x.id ===parseInt(req.params.id));
    if (etab) {
        res.status(200).json(etab);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });
    }
};


exports.getEtabByVille =  (req, res)=>{

    const etabs =  readData()
    const etab = etabs.find(x => x.location === req.params.location);
    if (etab) {
        res.status(200).json(etab);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });
    }
};

exports.getEtabByType =  (req, res)=>{

    const etabs =  readData()
    const etab = etabs.find(x => x.etablissement_type === req.params.etablissement_type);
    if (etab) {
        res.status(200).json(etab);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });
    }
};


exports.getEtabByTypeAndVille =  (req, res)=>{
    
    const etabs =  readData()
    const etab = etabs.find(x => x.etablissement_type === req.params.etablissement_type && x.location === req.params.location);
    if (etab) {
        res.status(200).json(etab);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });
    }
};





exports.editEtab =  (req, res)=>{

    const etabs = readData();
    const index = etabs.findIndex(x => x.id === parseInt(req.params.id));
    if (index !== -1) {
        etabs[index] = { ...etabs[index], ...req.body };
        writeData(etabs);
        res.status(200).json(etabs[index]);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });
    }
};

exports.deleteEtab =  (req, res)=>{

    const etabs = readData();
    const index = etabs.findIndex(x => x.id === parseInt(req.params.id));
    if (index !== -1) {
        etabs.splice(index, 1); 
        writeData(etabs); 
        res.status(200).json(etabs[index]);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });}; 
    };

exports.deleteEtabByVille =  (req, res)=>{

    const etabs = readData();
    const index = etabs.filter(x => x.id === req.params.location);
    if (index !== -1) {
        etabs.splice(index); 
        writeData(etabs); 
        res.status(200).json(etabs[index]);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });}; 
    };


exports.deleteEtabByType =  (req, res)=>{

    
    const etabs = readData();
    const index = etabs.filter(x => x.id === req.params.etablissement_type);
    if (index !== -1) {
        etabs.splice(index); 
        writeData(etabs); 
        res.status(200).json(etabs[index]);
    } else {
        res.status(404).json({ message: "Établissement non trouvé" });}; 
    };


exports.setEtabs =  (req, res)=>{

    const etabs = readDatab();
    const newEtab = {

    id: req.body.id,

    etablissement_type: req.body.etablissement_type,

    etablissement: req.body.etablissement,

    location:   req.body.location,

    address: req.body.address,

    mail:    req.body.mail,
       
    };
    etabs.push(newEtab);
    writeData(etabs);
    res.status(200).json(newEtab);
};