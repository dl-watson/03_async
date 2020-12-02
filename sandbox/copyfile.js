const fs = require("fs").promises;

const copyFile = () => {
  return fs.copyFile(
    "./streams/writefile_then.txt",
    "./streams/copyfile_async.txt",
    0,
    (err) => {
      if (err) throw err;
      console.log("writefile_then.txt was copied to copyfile_then.txt");
    }
  );
};

const copyFileAsync = async () => {
  try {
    const file = await fs.copyFile(
      "./streams/writefile_then.txt",
      "./streams/copyfile_then.txt",
      0,
      (err) => {
        if (err) throw err;
        console.log("writefile_then.txt was copied to copyfile_then.txt");
      }
    );
    return file;
  } catch (err) {
    console.log("Error: ", err);
  }
};

copyFile();
