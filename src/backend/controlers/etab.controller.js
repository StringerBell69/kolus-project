const EtabModel = require('../models/etab.model')


module.exports.getEtabs = async (req, res)=>{
    
    const etabs = await EtabModel.find();
    res.status(200).json(etabs);
};

module.exports.getEtabById = async (req, res)=>{
    
    const etab = await EtabModel.findById(selectedId);
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