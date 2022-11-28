import React, { useState } from "react";
import Light from "../Light";

import "../../styles/index.css";


//create your first component
const Home = () => {
	const colors = ["red", "yellow", "green"];
	const shadow = "none";
	const [lit, setLit] = useState("red");
	return (
		<div>
		<div className="traffictop"></div>
		<div className="container">
			<div className="greenLight">
			{colors.map((color) => {
			return <Light color={color} lit={lit} setLit={setLit}/>;		
			})}
			</div>
		</div>
		</div>
	);
};

export default Home;
