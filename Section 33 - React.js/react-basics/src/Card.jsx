import React from "react";

// Using props to make reusable components
function Card(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<img className="contact-img" src={props.img} alt={props.alt} />
			<p>{props.tel}</p>
			<p>{props.email}</p>
		</div>
	);
}

export default Card;
