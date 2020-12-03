const fs = require("fs").promises;
const { transformer } = require("./transformer");
const input_src = "./2_transformer/palindrome.txt";
const output_src = "./emordnilap.txt";

describe("transformer", () => {
  afterEach(() => {
    return fs.rm("./emordnilap.txt");
  });
  it("reads a file, removes all capitals with lowercase, makes all letters capital, then reverses the string", async () => {
    const string = await transformer(input_src);
    const contents = await fs.readFile(output_src, "utf-8");
    expect(contents).toEqual(string);
  });
});
