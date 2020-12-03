const fsPromises = require("fs").promises;
const _ = require("lodash");
const src = "./palindrome.txt";

const transformer = async (src) => {
  try {
    const req = await fsPromises.readFile(src, "utf-8");
    const lowercase = req.replace(/[A-Z]*/g, (letter) => letter.toLowerCase());
    const uppercase = lowercase
      .replace(/[a-z]*/g, (letter) => letter.toUpperCase())
      .split("");
    const reversed = _.reverse(uppercase).join("");

    const munged = await fsPromises.writeFile(
      "./emordnilap.txt",
      reversed,
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );

    return reversed;
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { transformer };
