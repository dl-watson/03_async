const fsPromises = require("fs").promises;
const _ = require("lodash");
const src = "./palindrome.txt";

const transformer = async (src) => {
  try {
    const req = await fsPromises.readFile(src, "utf-8");
    const data = munge(req);

    const mungedFile = await fsPromises.writeFile(
      "./emordnilap.txt",
      data,
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );

    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const munge = (str) => {
  const lowercase = str
    .replace(/[A-Z]*/g, (letter) => letter.toLowerCase())
    .replace(/[a-z]*/g, (letter) => letter.toUpperCase())
    .split("");
  return _.reverse(lowercase).join("");
};
module.exports = { transformer };
