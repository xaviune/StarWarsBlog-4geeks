import React, { useContext, useEffect } from "react";
import PlanetCard from "./planetcard.jsx";
import Table from 'react-bootstrap/Table';
import { Context } from "../store/appContext";

export const PlanetTable = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPlanets();
	}, []);

	return (
		<>
		<Table responsive>
      <thead>
        <tr >
		{store.planetList.map ((planet) => (
			<th key={planet.uid}>{planet.name}</th>
		))}
        </tr>
      </thead>
      <tbody>
	  <tr key={1}>
		{store.planetList.map ((planet, index) => (
			<td key={index}>
				<PlanetCard planeturl={planet.url} planetindex={index}/>
			</td>
		))}
		</tr>
      </tbody>
    </Table>
		</>
	);
};
