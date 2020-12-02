const fs = require("fs").promises;

const writeFile = () => {
  return fs.writeFile(
    "./writefile_then.txt",
    "fs.writeFile using then chaining",
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log("The file has been saved.");
    }
  );
};

const writeFileAsync = async () => {
  try {
    const file = await fs.writeFile(
      "./writefile_async.txt",
      "fs.writeFile using async/await",
      "utf-8"
    );
    return file;
  } catch (err) {
    console.log("Error: ", err);
  }
};
