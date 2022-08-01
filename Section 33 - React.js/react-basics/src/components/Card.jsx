import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

// Using props to make reusable components
function Card(props) {
	return (
		<div className="card">
			<div className="top">
				<h2 className="name">{props.name}</h2>
				<Avatar img={props.img} alt={props.alt} />
			</div>
			<div className="bottom">
				<Details detailInfo={props.tel} />
				<Details detailInfo={props.email} />
			</div>
		</div>
	);
}

export default Card;
