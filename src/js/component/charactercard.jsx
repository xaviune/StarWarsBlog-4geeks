import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import swlogo from '../../img/starwarslogo.jpeg';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { HeartFillIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
    const { store, actions } = useContext(Context);
    const [characterinfo, setCharacterInfo]= useState([]);
    const [characteruid, setCharacterUid]= useState([]);
    const isFavorite = store.favorites.some(fav => fav.type === 'character' && fav.uid === characteruid);
    const [checked, setChecked] = useState(isFavorite);

    let characterurl=props.characterurl;
    useEffect(() => {
      fetch(characterurl)
          .then(response => response.json())
          .then(data => {
              setCharacterInfo(data.result.properties);
              setCharacterUid(data.result.uid);
              setChecked(store.favorites.some(fav => fav.type === 'character' && fav.uid === data.result.uid));
          })
  }, [characterurl, store.favorites]);
  
    
    const characterlink = "/person/" + characteruid;
    
    const handleFavoriteToggle = () => {
        if (!checked) {
            actions.addfavcharacter(characteruid, characterinfo.name);
        } else {
            actions.removefavcharacter(characteruid);
        }
        setChecked(!checked);
    };
    
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
                
                <Link to={characterlink}><Button variant="outline-primary">Learn More!</Button></Link>
                
                <ToggleButton
                    className="mb-2 mx-2 float-end"
                    width="16"
                    height=""
                    id={`toggle-check-character-${characteruid}`}
                    type="checkbox"
                    variant="outline-warning"
                    checked={checked}
                    value="1"
                    onChange={handleFavoriteToggle}
                >
                    <HeartFillIcon size={16} />
                </ToggleButton>
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;
