const fs = require("fs").promises;

const writeFile = () => {
  return fs.writeFile(
    "./streams/writefile_then.txt",
    "fs.writeFile using then chaining",
    "utf-8",
    (err) => {
      if (err) throw err;
      console.log("The file has been saved.");
    }
  );
};

const writeFileAsync = async () => {
  try {
    const file = await fs.writeFile(
      "./streams/writefile_async.txt",
      "fs.writeFile using async/await",
      "utf-8"
    );
    return file;
  } catch (err) {
    console.log("Error: ", err);
  }
};
