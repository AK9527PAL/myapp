import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const obj = [
        { name: "Home", path: '/' },
        { name: "Contact Us", path: '/contact'
         },
        { name: "Task", path: '/task' }
    ]
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">RAPID</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            obj.map((e) => (

                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to={e.path}>{e.name}</NavLink>
                                    </li>

                                </ul>
                            ))
                        }

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar