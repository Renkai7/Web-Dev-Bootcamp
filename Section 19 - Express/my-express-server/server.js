const express = require("express");
// function representing the express module
const app = express();

// method from express to say what happens when browser gets in touch with server with get request
app.get("/", function (req, res) {
	res.send("Hello");
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
