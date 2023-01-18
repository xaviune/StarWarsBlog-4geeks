import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/starwarslogo.jpeg";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src={Logo} width="120" className="mx-5 "/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
