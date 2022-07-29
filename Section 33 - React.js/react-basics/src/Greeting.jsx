import React from "react";

// Putting Javascript code inside html while using ReactDOM
const fname = "Mike";
const lname = "Tsukino";
const luckyNumber = 7;
function Greeting() {
	return (
		<div>
			<h1>
				Hello {fname} {lname}
			</h1>
			<p>Your lucky number is {luckyNumber}</p>
		</div>
	);
}

export default Greeting;
