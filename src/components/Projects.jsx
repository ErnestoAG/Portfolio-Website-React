import { Link } from 'react-router-dom';

const links=[
    <Link key={1} className="nav-link text-light w-25" to= "https://using-projects-team.github.io/Touch-Some-Grass/">
        <img src="../src/assets/grass.jpg" className="img-thumbnail img-fluid"/>
        Touch Some Grass
    </Link>,
    <Link key={2} className="nav-link text-light w-25 ms-4" to= "https://project2-hivl.onrender.com">
        <img src="../src/assets/lawn.jfif" className="img-thumbnail img-fluid"/>
        Green Acres
    </Link>,
    <Link key={3} className="nav-link text-light w-25 ms-3" to= "https://ernestoag.github.io/Personal-Blog-Website/">
        <img src="../src/assets/blog.jfif" className="img-thumbnail img-fluid"/>
        Personal Blog Website
    </Link>,
    <Link key={4} className="nav-link text-light w-25" to= "https://ernestoag.github.io/Five-Days-Weather-App/">
        <img src="../src/assets/clouds.jpg" className="img-thumbnail img-fluid"/>
        Five Days Weather App
    </Link>,
];

function Projects() {

    return (
        <section className="bg-secondary bg-gradient text-white w-100 h-75">
            <h1 className="ms-5">Projects</h1>
            <ul className="lead d-flex align-content-around">
                {links.map((link) => link)}
            </ul>
        </section>
    );

}

export default Projects;