const { Schema, model } = require("mongoose");

const Image = new Schema({
    filename: { type: String },
    mimetype: { type: String },
    encoding: { type: String }
})


const filialeSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: Image
    },
    { timestamps: true }
)

 const Filiale = model("Filiale", filialeSchema);

 module.exports = {
        Filiale
    }
