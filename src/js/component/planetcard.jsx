import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import swlogo from '../../img/starwarslogo.jpeg';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { HeartFillIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";

function PlanetCard(props) {
    let planeturl=props.planeturl
    const [checked, setChecked] = useState();
    const [planetinfo, setplanetinfo]= useState([]);
    const [planetuid, setplanetuid]= useState([]);
    
          useEffect(() => {
            fetch(planeturl)
            .then(response => response.json())
            .then(data =>{
              setplanetinfo(data.result.properties)
              setplanetuid(data.result.uid)
            })
          }, [planeturl] )

      const planetlink = "/planet/"+planetuid
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={swlogo} />
      <Card.Body>
        <Card.Title>{planetinfo.name}</Card.Title>
        <Card.Text>
          Population: {planetinfo.population} <br/>
          Terrain: {planetinfo.terrain}
        </Card.Text>
        
        <Button variant="outline-primary" href={planetlink}>Learn More!</Button>
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

export default PlanetCard;
