import React from "react";

let currentYear = new Date().getFullYear();
function Footer() {
	return (
		<div>
			<p>Created by Ren Tsukino</p>
			<p>Copyright ⓒ {currentYear}</p>
		</div>
	);
}

export default Footer;
