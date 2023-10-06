// 1. Set up an album model

// 1a. Import mongoose
const mongoose = require("mongoose")


// 1b. Create an album schema
const PokemonSchema = new mongoose.Schema(
{
    PokedexNo: {
        type: Number,
        unique: true,
        required: true
    },
    Name: {
        type: String,
        unique: true,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Moves: [{
        type: String
    }]
  }
)
// 1c. Create the Pokemon model
const Pokemon = mongoose.model("Pokemon", PokemonSchema)

// 1d. Export the Pokemon model
module.exports = Pokemon;