// allows access for FileSystem library - can now use FileSystem
const fs = require("fs");

// creates copy of file - copyFileSync(src, destination)
fs.copyFileSync("file1.txt", "file2.txt");
