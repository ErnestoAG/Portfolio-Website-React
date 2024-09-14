function About() {

    return (
        <section className="bg-success d-flex flex-column justify-content-evenly bg-gradient text-white w-100">
                <h1 className="ms-5 mt-5">About Me</h1>
                <p className="lead mb-0 ms-5 mt-3">
                    My name is <strong>Ernesto Gonzalez</strong>, I am a full stack developer. 
                    I am a <strong>University of Florida</strong> alumnus and recent graduate. 
                    I know how to program with <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Node</strong>.
                    Another relevant skills that I have are:
                </p>
                <ul className="lead ms-5 mt-5">
                    <li>Styling via Bootstrap and CSS</li>
                    <li>Database management with PostgreSQL and MongoDB</li>
                    <li>API management via Express and Apollo server</li>
                </ul>
                <p className="ms-5 mt-5 mb-5">
                    In my free time, I read literature, write philosophy, go hiking, and most importantly, play video games.
                </p>
        </section>
    );

}

export default About;