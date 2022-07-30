import React from "react";
// import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import List from "./List";
import Greeting from "./Greeting";
import Card from "./Card";

function App() {
	return (
		<div>
			<Heading />
			<List />
			<Card
				name="Spider-man"
				img="https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart"
				alt="Spider-man"
				tel="+123 456 7890"
				email="spidey@spider.com"
			/>
			<Card
				name="Iron Man"
				img="https://playcontestofchampions.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war-720x720.jpg"
				alt="Iron Man"
			/>
			<Greeting />
		</div>
	);
}

export default App;
