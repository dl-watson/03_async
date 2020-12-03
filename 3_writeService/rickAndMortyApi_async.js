const fetch = require("node-fetch");
const url = "https://rickandmortyapi.com/api/character/";

const rickAndMortyApi_async = (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  return fetch(url)
    .then((res) => res.json())
    .then(
      (data) =>
        `Name: ${data.name}, Status: ${data.status}, Species: ${data.species}`
    );
};

module.exports = { rickAndMortyApi_async };
