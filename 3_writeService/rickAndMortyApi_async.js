const fetch = require("node-fetch");
const url = "https://rickandmortyapi.com/api/character/";

const rickAndMortyApi_async = async (id) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    const res = await fetch(url);
    const json = await res.json();
    const results = `Name: ${json.name}, Status: ${json.status}, Species: ${json.species}`;
    return results;
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { rickAndMortyApi_async };

rickAndMortyApi_async(1);
