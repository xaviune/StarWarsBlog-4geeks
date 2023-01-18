import React from "react";
import "../../styles/home.css";
import { PlanetTable } from "../component/planetstable.jsx";
import { ChararacterTable } from "../component/charactertable.jsx";

export const Home = () => (
	<div className="container">
		<h3 className="text-danger bold mt-4">Characters</h3>
			<ChararacterTable />
		<h3 className="text-danger bold mt-4">Planets</h3>
			<PlanetTable /> 
	</div>
);
