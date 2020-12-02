const fs = require("fs").promises;
const { copy } = require("./copy");

describe("copy", () => {
  afterEach(() => {
    return fs.rm('./src.txt', './dst.txt');
  });

  it("reads then writes a file", () => {
    await copy('./src.txt', './dst.txt');
    const contents = await fs.readFile('./dst.txt', 'utf-8');
    expect(contents).toEqual(`if you're reading this, copy() works as intended`);
  });
});
