const express = require("express");
const bodyparser = require("body-parser");

const app = express();
// setup bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

// bodyparser allows us to get information we are sent from post request
// ex. data from forms

app.get("/", function (req, res) {
	// __dirname allows the html file to be found no matter where its stored on another PC
	// __dirname is the path for the current file the javascript file is on
	res.sendFile(__dirname + "/index.html");
});

// app.post() allows others to post data to our route
app.post("/", function (req, res) {
	// get values from num1 and num2 values in 'name' inputs in form
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1 + num2;
	res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
	console.log("Server started on port 300.");
});
