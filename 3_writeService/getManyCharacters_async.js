const fetch = require("node-fetch");

const getManyCharacters_async = async (ids) => {
  try {
    const urls = urlFormatter(ids);
    const promises = await Promise.all(urls.map((url) => fetch(url)));
    const json = await Promise.all(promises.map((res) => res.json()));
    const results = json.map(
      (data) =>
        `Name: ${data.name}, Status: ${data.status}, Species: ${data.species}`
    );
    return results;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const urlFormatter = (ids) => {
  const url = `https://rickandmortyapi.com/api/character/`;
  return ids.map((id) => `${url}${id}`);
};

module.exports = { getManyCharacters_async };
