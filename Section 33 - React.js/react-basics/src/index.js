import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// const customStyle = {
// 	color: "red",
// 	fontSize: "20px",
// 	border: "1px solid black",
// };

// customStyle.color = "blue";

// 	// Inline styling
// 	// Useful if you want styles for certain elements to update on the fly
// 	// <h1 style={customStyle}>Hey World!</h1>
// );

// Styling Challenge - Change text and text color depending on time of day
// const date = new Date();
// let hour = date.getHours();

// const customStyle = {
// 	color: "",
// };

// let greeting = "";

// if (hour <= 12) {
// 	greeting = "Good morning";
// 	customStyle.color = "red";
// } else if (hour <= 18) {
// 	greeting = "Good afternoon";
// 	customStyle.color = "green";
// } else if (hour > 18 || hour === 0) {
// 	greeting = "Good evening";
// 	customStyle.color = "blue";
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<div>
// 		{/* Inline styling */}
// 		<h1 style={customStyle}>{greeting}</h1>
// 	</div>
// );

// React Components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
