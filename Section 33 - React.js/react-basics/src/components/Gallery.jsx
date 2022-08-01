import React from "react";

// Utilizing classes with className

function Gallery() {
	return (
		<div>
			<h1 className="heading">My Favorite Foods</h1>
			<div>
				<img
					className="food-img"
					src="https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1"
					alt="ramen"
				/>
				<img
					className="food-img"
					src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg"
					alt="pizza"
				></img>
				<img
					className="food-img"
					src="https://bakeitwithlove.com/wp-content/uploads/2021/08/Western-Bacon-Cheeseburger-sq.jpg"
					alt="burger"
				></img>
			</div>
		</div>
	);
}

export default Gallery;
