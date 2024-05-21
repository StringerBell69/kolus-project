const EtabModel = require('../models/etab.model')


module.exports.getEtabs = async (req, res)=>{
    
    const etabs = await EtabModel.find();
    res.status(200).json(etabs);
};

module.exports.getEtabById = async (req, res)=>{
    
    const etab = await EtabModel.findById(selectedId);
    res.status(200).json(etab);
};

module.exports.getEtabByVille = async (req, res)=>{
    
    const selectedVille = req.body.ville;
    const etab = await EtabModel.find({location: selectedVille });
    res.status(200).json(etab);
};

module.exports.getEtabByType = async (req, res)=>{
    
    const selectedType = req.body.type;
    const etab = await EtabModel.find({etablissement_type: selectedType });
    res.status(200).json(etab);
};

module.exports.getEtabByTypeAndVille = async (req, res)=>{
    
    const selectedType = req.body.type;
    const selectedVille = req.body.ville;
    const etab = await EtabModel.find({etablissement_type: selectedType,location: selectedVille });
    res.status(200).json(etab);
};


module.exports.editEtab = async (req, res)=>{

    const etab = await EtabModel.findById(selectedId)

    if (!etab){
        res.status(400).json({message: "Cet établissement n'existe pas"});
    }

    const updateEtab = await EtabModel.findById(etab, req.body,
        {new: true}
    )
    res.status(200).json(updateEtab);
};

module.exports.deleteEtab = async (req, res)=>{

    const etab = await EtabModel.remove(selectedId)
};

module.exports.deleteEtabByVille = async (req, res)=>{


    const selectedVille = req.body.ville;
    const etab = await EtabModel.remove({ location: selectedVille });
    res.status(200).json(etab);
};

module.exports.deleteEtabByType = async (req, res)=>{

    
    const selectedType = req.body.type;
    const etab = await EtabModel.remove({etablissement_type: selectedType });
    res.status(200).json(etab);
};

module.exports.setEtabs = async (req, res)=>{

    const etab = await EtabModel.create(
    {
    id: req.body.id,
     
    etablissement_type: req.body.etablissement_type,

    etablissement: req.body.etablissement,

    location:   req.body.location,

    address: req.body.address,

    mail:    req.body.mail,

    })
    res.status(200).json(etab);
};