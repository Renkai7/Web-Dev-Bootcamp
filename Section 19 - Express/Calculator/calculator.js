const express = require("express");
const app = express();

app.get("/", function (req, res) {
	// __dirname allows the html file to be found no matter where its stored on another PC
	// __dirname is the path for the current file the javascript file is on
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
	console.log("Server started on port 300.");
});
