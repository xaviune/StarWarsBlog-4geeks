import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/starwarslogo.jpeg";

export const Planetpage = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [planetinfo, setplanetinfo]= useState([]);
	const [planetdescription, setplanetdescription] = useState([]);
	let planeturl='https://www.swapi.tech/api/planets/'+params.theid
          useEffect(() => {
            fetch(planeturl)
            .then(response => response.json())
            .then(data =>{
              setplanetinfo(data.result.properties)
			  setplanetdescription(data.result.description)
			  console.log(data.result.description)
            })
          }, [planeturl])
	return (
		<div className="container">
			<div className="row text-center mb-3">
				<div className="col-6"><img src={Logo} className="img-fluid"/></div>
				<div className="col-6">
					<h2 className="mt-4">{planetinfo.name}</h2>
					<p className="mt-4">{planetdescription}</p>
				</div>
			<div className="row text-center border-top border-danger mt-3 text-danger">
				<div className="col mt-3"> <p className="fw-bold">Name</p> {planetinfo.name}</div>
				<div className="col mt-3"> <p className="fw-bold">Climate</p> {planetinfo.climate}</div>
				<div className="col mt-3"> <p className="fw-bold">Population</p> {planetinfo.population}</div>
				<div className="col mt-3"> <p className="fw-bold">Orbital Period</p> {planetinfo.orbital_period}</div>
				<div className="col mt-3"> <p className="fw-bold">Rotation Period</p> {planetinfo.rotation_period}</div>
				<div className="col mt-3"> <p className="fw-bold">Diameter</p> {planetinfo.diameter}</div>
			</div>
			</div>
		</div>
	);
};

Planetpage.propTypes = {
	match: PropTypes.object
};
