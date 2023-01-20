import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import swlogo from '../../img/starwarslogo.jpeg';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { HeartFillIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";

function CharacterCard(props) {
    const [checked, setChecked] = useState();
    const [characterinfo, setcharacterinfo]= useState([]);
    const [characteruid, setcharacteruid]= useState([]);
    let characterurl=props.characterurl
          useEffect(() => {
            fetch(characterurl)
            .then(response => response.json())
            .then(data =>{
              setcharacterinfo(data.result.properties)
              setcharacteruid(data.result.uid)
            })
          }, [characterurl] )
    const characterlink = "/person/"+characteruid
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={swlogo} />
      <Card.Body>
        <Card.Title>{characterinfo.name}</Card.Title>
        <Card.Text>
          Gender: {characterinfo.gender} <br/>
          Hair color: {characterinfo.hair_color} <br/>
          Eye color: {characterinfo.eye_color}
        </Card.Text>
        
        <Button variant="outline-primary" href={characterlink}>Learn More!</Button>
        <ToggleButton
        className="mb-2 mx-2 float-end"
        width="16"
        height=""
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        <HeartFillIcon size={16} />
      </ToggleButton>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
