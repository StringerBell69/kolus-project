const mongoose = require("mongoose")

const etabSchema = mongoose.Schema({
        id: {
            type: String,
            required: true,
        },

        etablissement_type: {
            type: String,
            required: true,
        },

        etablissement: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        mail: {
            type: String,
            required: true,
            validate: {
                validator: (value) => /\S+@\S+\.\S+/.test(value),
                message: "email incorrect",
            },
        },


        
        
        
        
    })

    module.exports = mongoose.model('etab',etabSchema)
