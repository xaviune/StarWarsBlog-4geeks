import React from "react";
import PlanetCard from "./planetcard.jsx";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

export const PlanetTable = () => {
	const [PlanetList, setPlanetList] = useState([])

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets`)
		.then(response => response.json())
		.then(data =>{
			setPlanetList(data.results)
			{/*console.log(data)*/}
		})
	}, [] )
	return (
		<>
		<Table responsive>
      <thead>
        <tr >
		{PlanetList.map ((planet) => (
			<th key={planet.uid}>{planet.name}</th>
		))}
        </tr>
      </thead>
      <tbody>
	  <tr key={1}>
		{PlanetList.map ((planet, index) => (
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
