import React from "react";
// eslint-disable-next-line
import Heading from "./Heading";
// eslint-disable-next-line
import List from "./List";
// eslint-disable-next-line
import Greeting from "./Greeting";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
	return (
		<Card
			key={contact.id}
			name={contact.name}
			img={contact.imgURL}
			tel={contact.phone}
			email={contact.email}
		/>
	);
}

function App() {
	return (
		<div>
			{/* <Heading /> */}
			{/* <List /> */}
			<Avatar
				img="https://i.pinimg.com/originals/6b/96/cb/6b96cb0a06d39dadf8c386882c8814a8.png"
				alt="Avatar"
			/>
			{contacts.map(createCard)}
			{/* <Card
				name={contacts[0].name}
				img={contacts[0].imgURL}
				alt={contacts[0].alt}
				tel={contacts[0].phone}
				email={contacts[0].email}
			/>
			<Card
				name={contacts[1].name}
				img={contacts[1].imgURL}
				alt={contacts[1].alt}
				tel={contacts[1].phone}
				email={contacts[1].email}
			/> */}
			{/* <Greeting /> */}
		</div>
	);
}

export default App;
