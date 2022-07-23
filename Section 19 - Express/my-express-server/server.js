const express = require("express");
// function representing the express module
const app = express();

// method from express to say what happens when browser gets in touch with server with get request

// routing
app.get("/", function (req, res) {
	res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
	res.send("Contact me at: ren@gmail.com");
});

app.get("/about", function (req, res) {
	res.send("Hello, my name is Ren. I am a programmer.");
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
