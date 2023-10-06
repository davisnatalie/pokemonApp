// 3a. Import express, router, and controller functionality
const express = require("express")
const router = express.Router()
const {
    getAllPokemon,
    getOnePokemon,
    createOneMon,
    deleteOneMon,
    updateOnePokemon
  } = require("../../controllers/api/pokemonController")

// localhost:8080/api/pokemon/allPokemon
router.get("/allPokemon", getAllPokemon);

// localhost:8080/api/pokemon/onePokemon
router.get("/onePokemon/:name", getOnePokemon);

// localhost:8080/api/pokemon/createOneMon
router.post("/createOneMon", createOneMon);

// localhost:8080/api/pokemon/deleteOneMon/:name
router.delete("/deleteOneMon/:name", deleteOneMon);

// localhost:8080/api/pokemon/updateOneMon/:name
router.put("/updateOneMon/:name", updateOnePokemon);

// 3c. Export the router
module.exports = router; 