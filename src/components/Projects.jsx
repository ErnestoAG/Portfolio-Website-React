// import { useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {

    const links=[
        <Link key={1} className="nav-link text-light" to= "/">
            Touch Some Grass
        </Link>,
        <Link key={2} className="nav-link text-light" to= "/">
            Green Acres
        </Link>,
        <Link key={3} className="nav-link text-light" to= "/">
            Personal Blog Website
        </Link>,
        <Link key={4} className="nav-link text-light" to= "/">
            Five Days Weather App
        </Link>,
    ];

    return (
        <section>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link) => link)}
            </ul>
        </section>
    );

}

export default Projects;