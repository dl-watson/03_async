const fetch = require("node-fetch");

const getManyCharacters = async (ids) => {
  const urls = urlFormatter(ids);
  const promises = await Promise.all(
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
  return promises;
};

const urlFormatter = (ids) => {
  const url = `https://rickandmortyapi.com/api/character/`;

  return ids.map((id) => `${url}${id}`);
};

module.exports = { getManyCharacters };
