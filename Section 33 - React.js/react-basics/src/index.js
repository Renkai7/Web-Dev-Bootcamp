import React from "react";
import ReactDOM from "react-dom/client";

// const fname = "Mike";
// const lname = "Tsukino";
// const luckyNumber = 7;
// let currentYear = new Date().getFullYear();
// const customStyle = {
// 	color: "red",
// 	fontSize: "20px",
// 	border: "1px solid black",
// };

// customStyle.color = "blue";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	// Putting html elements inside JSX
// 	// <div>
// 	// 	<h1>Hello World!</h1>
// 	// 	<p>This is a paragraph</p>
// 	// </div>
// 	// <div>
// 	// 	<h1>My Favorite Foods</h1>
// 	// 	<ul>
// 	// 		<li>Pizza</li>
// 	// 		<li>Burger</li>
// 	// 		<li>Steak</li>
// 	// 	</ul>
// 	// </div>

// 	// Putting Javascript code inside html while using ReactDOM
// 	// <div>
// 	// 	<h1>
// 	// 		Hello {fname} {lname}
// 	// 	</h1>
// 	// 	<p>Your lucky number is {luckyNumber}</p>
// 	// </div>

// 	// JSX Practice
// 	// <div>
// 	// 	<p>
// 	// 		Created by Ren Tsukino
// 	// 	</p>
// 	// 	<p>Copyright {currentYear}</p>
// 	// </div>

// 	// Styling React Elements
// 	// <div>
// 	// 	<h1 className="heading">My Favorite Foods</h1>
// 	// 	<div>
// 	// 		<img
// 	// 			className="food-img"
// 	// 			src="https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1"
// 	// 			alt="ramen"
// 	// 		/>
// 	// 		<img
// 	// 			className="food-img"
// 	// 			src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg"
// 	// 			alt="pizza"
// 	// 		></img>
// 	// 		<img
// 	// 			className="food-img"
// 	// 			src="https://bakeitwithlove.com/wp-content/uploads/2021/08/Western-Bacon-Cheeseburger-sq.jpg"
// 	// 			alt="burger"
// 	// 		></img>
// 	// 	</div>
// 	// </div>

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
root.render(
	<div>
		<h1>My Favorite Foods</h1>
		<ul>
			<li>Burger</li>
			<li>Steak</li>
			<li>Pizza</li>
		</ul>
	</div>
);
