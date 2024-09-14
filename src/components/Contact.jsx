import { useState } from 'react';
import { Link } from 'react-router-dom';

const links=[
    <Link key={1} className="nav-link text-light" to= "https://github.com/ErnestoAG">
        GitHub: ErnestoAG
    </Link>,
    <Link key={2} className="nav-link text-light" to= "https://mail.google.com/mail/u/0/#inbox?compose=new">
        E-mail: ernestoale37@gmail.com
    </Link>,
];

function Contact() {

    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [text, setText] = useState('');

    const InputChange = (e) => {
        const { name, value } = e.target;
        if ('name' == name) {
            return setName(value);
        } else if ('email' == name) {
            return setMail(value);
        } else {
            return setText(value);
        }
    };

    const Submit = (e) => {
        e.preventDefault();
        if(text == "") {
            window.alert("Please, fill out the comment section");
        }
        setName('');
        setMail('');
        setText('');
    };

    return (
        <section className="bg-danger bg-gradient text-white w-100 h-75">
                <h1 className="ms-5">Contact</h1>
                <p className="lead ms-5 fs-3">
                    You can contact me through my phone number, e-mail, and follow me on GitHub:
                </p>
                <ul className="lead ms-5 list-unstyled">
                    <li>Phone: ***-***-****</li>
                    {links.map((link) => link)}
                </ul>

                <h2 className="ms-5">You can leave your information and requests with this form:</h2>

                <form className="d-flex flex-row ms-5 w-5" onSubmit={Submit}>
                    <input
                    value={name}
                    name="name"
                    onChange={InputChange}
                    type="text"
                    placeholder="Full Name"
                    />
                    <input
                    value={email}
                    name="email"
                    onChange={InputChange}
                    type="text"
                    placeholder="e-mail"
                    />
                    <textarea
                    value={text}
                    name="Comment"
                    onChange={InputChange}
                    type="text"
                    rows="5"
                    cols="50"
                    placeholder="Write your comments here"
                    />
                    <button className="btn btn-info text-white" type="submit">
                    Submit
                    </button>
                </form>
                
        </section>
    );

}

export default Contact;