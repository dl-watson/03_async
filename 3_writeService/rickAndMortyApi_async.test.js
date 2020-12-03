const { rickAndMortyApi_async } = require("./rickAndMortyApi_async");

describe("rickAndMortyApi", () => {
  it("takes an id and returns a promise that resolves to a character's name, status and species", async () => {
    const actual = await rickAndMortyApi_async(1);
    expect(actual).toEqual("Name: Rick Sanchez, Status: Alive, Species: Human");
  });
});
