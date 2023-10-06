const Pokemon = require("../../models/pokemonModel");
const axios = require("axios");

async function renderAllPokemon(req, res) {
    try {
        let listOfPokemons = await Pokemon.find({})

        res.render("allMons", {pokemons: listOfPokemons});
    } catch (error) {
        let errorObj = {
            message: "failure to get Pokemon Page",
            payload: error
        }

        // server-side error
        console.log(errorObj);

        // client-side error
        res.json(errorObj);
    }
}

async function renderOnePokemon(req, res) {
    try {
        let results = await Pokemon.findOne({Name: req.params.name})

        res.render("oneMon", {oneMon: results});
    } catch (error) {
        let errorObj = {
            message: "failure to get Pokemon Page",
            payload: error
        }

        // server-side error
        console.log(errorObj);

        // client-side error
        res.json(errorObj);
    }
}
async function renderCreatePokemonForm(req, res) {
    try {

        res.render("newMon")
    } catch (error) {
        let errorObj = {
            message: "failure to get Pokemon Page",
            payload: error
        }

        // server-side error
        console.log(errorObj);

        // client-side error
        res.json(errorObj);
    }
}

async function renderUpdatePokemonForm(req, res) {
    try {
        let results = await Pokemon.findOne({Name: req.params.name})

        res.render("updateMon", {oneMon:results} )
    } catch (error) {
        let errorObj = {
            message: "failure to get Update Pokemon Page",
            payload: error
        }

        // server-side error
        console.log(errorObj);

        // client-side error
        res.json(errorObj);
    }
}

module.exports = {renderAllPokemon, renderOnePokemon, renderCreatePokemonForm, renderUpdatePokemonForm}