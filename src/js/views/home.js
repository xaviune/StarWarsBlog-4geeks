import React,{useContext} from "react";
import "../../styles/home.css";
import { PlanetTable } from "../component/planetstable.jsx";
import { ChararacterTable } from "../component/charactertable.jsx";
import {Context} from "../store/appContext";

export const Home = () => {
 const { store, actions } = useContext(Context);
 console.log(`store: ${JSON.stringify(store.favorites)}`);
//  if (store.characterList.length === 0 || store.planetList.length === 0) {
//     return <p>Be patient we are loading the data...</p>;
//   }
return (
	<div className="container">
		<h3 className="text-danger bold mt-4">Characters</h3>
			<ChararacterTable />
		<h3 className="text-danger bold mt-4">Planets</h3>
			<PlanetTable /> 
	</div>
)}
