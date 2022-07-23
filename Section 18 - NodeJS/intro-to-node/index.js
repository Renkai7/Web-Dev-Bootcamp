// allows access for FileSystem library - can now use FileSystem
// const fs = require("fs");

// creates copy of file - copyFileSync(src, destination)
// fs.copyFileSync("file1.txt", "file2.txt");

// ***** Superhero names
// get access to module
var superheroes = require("superheroes");

var mySuperheroName = superheroes.random();

console.log(mySuperheroName);
