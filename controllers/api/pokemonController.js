// Set up pokemons controller

// Import the pokemon model
const Pokemon = require("../../models/pokemonModel")

// Write functionality to render all pokemon
async function getAllPokemon(req, res){
    
    try {

        let foundPokemon = await Pokemon.find({});

        res.json({
            message: "success",
            payload: foundPokemon
        })
    } catch (error) {
        let errorObj = {
            message: "failure to find pokemon",
            payload: error
        }

        // server-side
        console.log(errorObj)

        // client-side
        res.json(errorObj)
    }
}

// Write functionality to get one pokemon

async function getOnePokemon(req, res) {
    try {
        let results = await Pokemon.findOne({ Name: req.params.name });

        res.json({
            message: "success",
            payload: results 
        })
    } catch (error) {
        let errorObj = {
            message: "failure to find that one pokemon",
            payload: error
        }

        // server-side
        console.log(errorObj)

        // client-side
        res.json(errorObj)
    }
}

// Write functionality to create one pokemon

async function createOneMon(req, res) {
    try {
        //capture the req.body form data
        let newPokemon = {
            PokedexNo: req.body.PokedexNo, 
            Name: req.body.Name,
            Type: req.body.Type,
            Moves: req.body.Moves.split(",")
        }

        // Post new document to collection

        await Pokemon.create(newPokemon)
        res.json({
            message: "success",
            payload: newPokemon
        })
    } catch (error) {
        let errorObj = {
            message: "failure to create pokemon",
            payload: error
        }

        // server-side
        console.log(errorObj)

        // client-side
        res.json(errorObj)
    }
}


async function deleteOneMon(req, res) {
    try {
        let deletedPokemon = await Pokemon.deleteOne({Name: req.params.name})

        //backend response
        // res.json({
        //     message: "success",
        //     payload: deletedPokemon
        // })

        //front end response
        res.redirect("/")

    } catch (error) {
        let errorPacket = {
            message: "Pokemon delete was not effective",
            payload: error
        }

        res.json(errorPacket)

        console.log(errorPacket)
    }
}

async function updateOnePokemon(req, res) {
    try {

        let updatedPokemon = {
            PokedexNo: req.body.PokedexNo, 
            Name: req.body.Name,
            Type: req.body.Type,
            Moves: req.body.Moves.split(",")
        }
        // Target the Pokemon who's info we are updating
       
        await Pokemon.updateOne(
            { Name: req.params.name },
            { $set: updatedPokemon },
            { upsert: true }
        )
        res.redirect(`/oneMon/${updatedPokemon.Name}`)

        // Tell the client that this operation was OK
        // res.json({
        //     message: "success",
        //     payload: updatedPokemon
        // })
    } catch (error) {
        let errorObj = {
            message: "update Pokemon was ineffective!",
            payload: error
        }

        // server-side
        console.log(errorObj)

        // client-side
        res.json(errorObj)
    }
}

//Export controller functions
module.exports = {
    getAllPokemon,
    getOnePokemon,
    createOneMon,
    deleteOneMon,
    updateOnePokemon
}