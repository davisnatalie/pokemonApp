const express = require("express");
const router = express.Router();

const {renderAllPokemon, renderOnePokemon, renderCreatePokemonForm, renderUpdatePokemonForm} = require("../../controllers/client/viewController")

// localhost:8080/
router.get("/", renderAllPokemon);

// localhost:8080/oneMon
router.get("/oneMon/:name", renderOnePokemon);

// localhost:8080/createOneMon
router.post("/createOneMon", renderCreatePokemonForm);

// localhost:8080/updateMon
router.get("/updateMon/:name", renderUpdatePokemonForm);


module.exports = router;