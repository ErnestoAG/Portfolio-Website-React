import { Link } from 'react-router-dom';

function Resume() {

    return (
        <section className="bg-warning d-flex flex-column justify-content-evenly bg-gradient text-success w-100">

                <h1 className="ms-5 mt-3"><Link className="text-decoration-none text-reset" to= "https://drive.google.com/uc?export=download&id=1g6U1sSeqJzaEvQASBYDTWSAY3bjRBHyv">Resume</Link></h1>
                <h2 className="ms-5">Education</h2>
                <ul className="lead ms-5 list-unstyled fw-bold">
                    <li>AA degree at Palm Beach State College (PBSC)</li>
                    <li>Bachelor`s Degree at University of Florida (UF)</li>
                </ul>
                <h2 className="ms-5">Skills</h2>
                <ul className="lead ms-5 list-unstyled fw-bold">
                    <li>Proficient at styling with Bootstrap and CSS</li>
                    <li>Knows how to program with JavaScript, Node, and React</li>
                    <li>Knows database management with PostgreSQL and MongoDB</li>
                    <li>Knows how to implement APIs via Express and Apollo server</li>
                </ul>
                <h2 className="ms-5">Other Relevant Skills</h2>
                <ul className="lead ms-5 list-unstyled fw-bold">
                    <li>Speaks English and Spanish</li>
                    <li>Knows how to use Microsoft 365 applications</li>
                    <li>Knows the programming languages C++, Java, and Python</li>
                </ul>
                
        </section>
    );

}

export default Resume;