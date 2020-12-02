const fs = require("fs").promises;

const copy = (src, dst) => {
  return fs
    .readFile(src, "utf-8", (err) => {
      if (err) throw err;
    })
    .then((data) => {
      data += `\nAnd writeFile works, too!`;
      fs.writeFile(dst, data, "utf-8", (err) => {
        if (err) throw err;
      });
    });
};

module.exports = { copy };
