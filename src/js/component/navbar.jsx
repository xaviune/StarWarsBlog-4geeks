import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/starwarslogo.jpeg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext";
import { TrashIcon } from "@primer/octicons-react";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [favCounter, setFavCounter] = useState(0);

    useEffect(() => {
        if (store.favorites) {
            const counter = store.favorites.length;
            setFavCounter(counter);
        }
    }, [store.favorites]);

    const handleDelete = (uid, type) => {
        if (type === "character") {
            actions.removefavcharacter(uid);
        } else if (type === "planet") {
            actions.removefavplanet(uid);
        }
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <img src={Logo} width="120" className="mx-5 " />
            </Link>
            <div className="ml-auto">
                <DropdownButton id="dropdown-favorites" title={`Favorites ${favCounter}`}>
                    {store.favorites && store.favorites.map((fav, index) => {
                        const linkTo = fav.type === "character" ? `/person/${fav.uid}` : `/planet/${fav.uid}`;
                        return (
                            <Dropdown.Item key={index}>
								<div className="d-flex justify-content-between align-items-center">
									<Link to={linkTo}>{fav.name}</Link>
									<div onClick={() => handleDelete(fav.uid, fav.type)}>
										<TrashIcon size={16} />
									</div>
								</div>
							</Dropdown.Item>

                        )
                    })}
                </DropdownButton>
            </div>
        </nav>
    );
};
