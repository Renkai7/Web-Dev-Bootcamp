const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	var today = new Date();
	var currentDay = today.getDay();
	var day = "";

	// if (currentDay === 6 || currentDay === 0) {
	// 	day = "Weekend";
	// } else {
	// 	day = "Weekday";
	// }

	switch (currentDay) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			console.log("Error: current day is equal to: " + currentDay);
			break;
	}
	res.render("list", { kindOfDay: day });
});

app.get("/about", function (req, res) {
	res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
	port = 3000;
}

app.listen(port, function () {
	console.log("Server successfully started.");
});
