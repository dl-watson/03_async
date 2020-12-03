const { getManyCharacters } = require("./getManyCharacters");

const ids = [2, 4, 6, 8];

describe("getManyCharacters", () => {
  it("takes an array of ids and returns a promise that resolves with an array of characters", async () => {
    const actual = await getManyCharacters(ids);
    expect(actual).toEqual([
      "Name: Morty Smith, Status: Alive, Species: Human",
      "Name: Beth Smith, Status: Alive, Species: Human",
      "Name: Abadango Cluster Princess, Status: Alive, Species: Alien",
      "Name: Adjudicator Rick, Status: Dead, Species: Human",
    ]);
  });
});
