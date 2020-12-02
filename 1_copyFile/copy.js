const fs = require("fs").promises;

const copy = (src, dst) => {
  return fs
    .readFile(src, "utf-8", (err, data) => {
      if (err) throw err;
    })
    .then((data) => console.log(data));
};

module.exports = { copy };

copy("./README.md");
