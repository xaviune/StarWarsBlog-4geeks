import React from "react";
import CharacterCard from "./charactercard.jsx";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

export const ChararacterTable = () => {
		const [CharacterList, setCharacterList] = useState([])

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people`)
		.then(response => response.json())
		.then(data =>{
			setCharacterList(data.results)
			{/* console.log(data)*/}
		})
	}, [] )
	return (
		<>
		<Table responsive>
      <thead>
        <tr >
		{CharacterList.map ((character) => (
			<th key={character.uid}>{character.name}</th>
		))}
        </tr>
      </thead>
      <tbody>
	  <tr key={1}>
		{CharacterList.map ((character, index) => (
			<td key={index}>
				<CharacterCard characterurl={character.url}/>
			</td>
		))}
		</tr>
       
      </tbody>
    </Table>
		</>
		
	);
};
