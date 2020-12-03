const fetch = require("node-fetch");

const getManyCharacters = (ids) => {
  const urls = urlFormatter(ids);
  return Promise.all(
    urls.map((url) =>
      fetch(url).then((res) =>
        res
          .json()
          .then(
            (data) =>
              `Name: ${data.name}, Status: ${data.status}, Species: ${data.species}`
          )
      )
    )
  );
};

const urlFormatter = (ids) => {
  const url = `https://rickandmortyapi.com/api/character/`;
  return ids.map((id) => `${url}${id}`);
};

module.exports = { getManyCharacters };
