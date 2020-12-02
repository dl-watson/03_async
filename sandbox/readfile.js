const fs = require("fs").promises;

const readFile = () => {
  return fs
    .readFile("./README.md", "utf-8", (err, data) => {
      if (err) throw err;
      console.log(data);
    })
    .then((data) => console.log(data));
};

const readFileAsync = async () => {
  try {
    const response = await fs.readFile("./README.md", "utf-8");
    return response;
  } catch (err) {
    console.log("Error: ", err);
  }
};
