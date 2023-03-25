require("dotenv").config();
const axios = require("axios");
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

// axios returns a promise, so we need to use async await to wait for it to return a value

const pokeArray = [];

async function getPokemon() {
    await axios
        .get("https://pokeapi.co/api/v2/pokemon/1/")
        .then((poke) => {
            console.log(poke);
        })
        .catch((error) => {
            console.log(error);
        });
}

getPokemon();
