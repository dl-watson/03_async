const fs = require("fs").promises;
const { copy } = require("./copy");

describe("copy", () => {
  afterEach(() => {
    return fs.rm("./dst.txt");
  });

  it("reads then writes a file", async () => {
    await copy("./1_copyFile/src.txt", "./dst.txt");
    const contents = await fs.readFile("./dst.txt", "utf-8");
    expect(contents).toEqual(`readFile works!\nAnd writeFile works, too!`);
  });
});
