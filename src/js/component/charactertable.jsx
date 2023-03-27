import React, { useContext, useEffect } from "react";
import CharacterCard from "./charactercard.jsx";
import Table from 'react-bootstrap/Table';
import { Context } from "../store/appContext";

export const ChararacterTable = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadCharacters();
	}, []);

	return (
		<>
		<Table responsive>
      <thead>
        <tr >
		{store.characterList.map ((character) => (
			<th key={character.uid}>{character.name}</th>
		))}
        </tr>
      </thead>
      <tbody>
	  <tr key={1}>
		{store.characterList.map ((character, index) => (
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
