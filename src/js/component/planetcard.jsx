import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import swlogo from '../../img/starwarslogo.jpeg';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { HeartFillIcon } from "@primer/octicons-react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

function PlanetCard(props) {
    const { store, actions } = useContext(Context);
    let planeturl=props.planeturl
    const [planetinfo, setplanetinfo]= useState([]);
    const [planetuid, setplanetuid]= useState([]);
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        fetch(planeturl)
            .then(response => response.json())
            .then(data =>{
                setplanetinfo(data.result.properties)
                setplanetuid(data.result.uid)
                setChecked(store.favorites.some(fav => fav.type === "planet" && fav.uid === data.result.uid));
            })
    }, [planeturl, store.favorites])

    const planetlink = `/planet/${planetuid}`;

    const handleToggle = () => {
        if (checked) {
            actions.removefavplanet(planetuid);
        } else {
            actions.addfavplanet(planetuid, planetinfo.name);
        }
        setChecked(!checked);
    };
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={swlogo} />
            <Card.Body>
                <Card.Title>{planetinfo.name}</Card.Title>
                <Card.Text>
                    Population: {planetinfo.population} <br/>
                    Terrain: {planetinfo.terrain}
                </Card.Text>

                <Link to={planetlink}><Button variant="outline-primary">Learn More!</Button></Link>
                <ToggleButton
                    className="mb-2 mx-2 float-end"
                    width="16"
                    height=""
                    id={`toggle-check-planet-${planetuid}`}
                    type="checkbox"
                    variant="outline-warning"
                    checked={checked}
                    value="1"
                    onChange={handleToggle}
                >
                    <HeartFillIcon size={16} />
                </ToggleButton>
            </Card.Body>
        </Card>
    );
}

export default PlanetCard;
