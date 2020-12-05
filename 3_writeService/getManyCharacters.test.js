const { getManyCharacters } = require("./getManyCharacters");
const { getManyCharacters_async } = require("./getManyCharacters_async");
const fetch = require("node-fetch");
const mockAPI = require("./mocks/mockAPI.json");
const ids = [2, 4, 6, 8];
const mockExpected = [
  "Name: Morty Smith, Status: Alive, Species: Human",
  "Name: Morty Smith, Status: Alive, Species: Human",
  "Name: Morty Smith, Status: Alive, Species: Human",
  "Name: Morty Smith, Status: Alive, Species: Human",
];

jest.mock("node-fetch");

describe("getManyCharacters", () => {
  it("mocks response from Rick and Morty API", async () => {
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockAPI),
    });
    const actual = await getManyCharacters(ids);
    expect(actual).toEqual(mockExpected);
  });

  describe("getManyCharacters", () => {
    it("takes an array of ids and returns a promise that resolves with an array of characters", async () => {
      fetch.mockResolvedValue({
        json: () => Promise.resolve(mockAPI),
      });
      const actual = await getManyCharacters_async(ids);
      expect(actual).toEqual(mockExpected);
    });
  });
});
