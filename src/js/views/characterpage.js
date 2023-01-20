import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/starwarslogo.jpeg";

export const Characterpage = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [characterinfo, setcharacterinfo]= useState([]);
	const [characterdescription, setcharacterdescription] = useState([]);
	let characterurl='https://www.swapi.tech/api/people/'+params.theid
          useEffect(() => {
            fetch(characterurl)
            .then(response => response.json())
            .then(data =>{
              setcharacterinfo(data.result.properties)
			  setcharacterdescription(data.result.description)
			  console.log(data.result.description)
            })
          }, [characterurl])
	return (
		<div className="container">
			<div className="row text-center mb-3">
				<div className="col-6"><img src={Logo} className="img-fluid"/></div>
				<div className="col-6">
					<h2 className="mt-4">{characterinfo.name}</h2>
					<p className="mt-4">{characterdescription}</p>
				</div>
			<div className="row text-center border-top border-danger mt-3 text-danger">
				<div className="col mt-3"> <p className="fw-bold">Name</p> {characterinfo.name}</div>
				<div className="col mt-3"> <p className="fw-bold">Birth Year</p> {characterinfo.birth_year}</div>
				<div className="col mt-3"> <p className="fw-bold">Gender</p> {characterinfo.gender}</div>
				<div className="col mt-3"> <p className="fw-bold">Height</p> {characterinfo.height}</div>
				<div className="col mt-3"> <p className="fw-bold">Skin Color</p> {characterinfo.skin_color}</div>
				<div className="col mt-3"> <p className="fw-bold">Eye Color</p> {characterinfo.eye_color}</div>
			</div>
			</div>
		</div>
	);
};

Characterpage.propTypes = {
	match: PropTypes.object
};
