import { useState } from "react";

import "./contact.css";

function Contact() {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        email: true,
        message: true,
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const isValidEmail = (email) => {
        //eslint-disable-next-line
        return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    };

    const isEmpty = (value) => value.trim() === "";

    const inputChangeHandler = (event) => {
        if (event.target.name === "name") setName(event.target.value);
        if (event.target.name === "subject") setSubject(event.target.value);
        if (event.target.name === "email") setEmail(event.target.value);
        if (event.target.name === "message") setMessage(event.target.value);
    };

    const onSubmitHandler = (event) => {
        const enteredNameIsValid = !isEmpty(name);
        const enteredEmailIsValid = !isEmpty(email) && isValidEmail(email);
        const enteredMessageIsValid = !isEmpty(message);

        setFormInputValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            message: enteredMessageIsValid,
        });

        const formIsValid =
            enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

        if (!formIsValid) {
            event.preventDefault();
            return;
        }

        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
    };

    return (
        <section>
            <div className="contact" id="contact">
                <h2>Contact Us</h2>
                <div className="contact-wrapper">
                    <form onSubmit={onSubmitHandler}>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <span>*</span>Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={inputChangeHandler}
                                />
                                {!formInputValidity.name && (
                                    <p className="error">
                                        Please provide your name
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    value={subject}
                                    onChange={inputChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                <span>*</span>Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={inputChangeHandler}
                            />
                            {!formInputValidity.email && (
                                <p className="error">
                                    Please provide valid email
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">
                                <span>*</span>Message
                            </label>
                            <textarea
                                cols="30"
                                rows="10"
                                name="message"
                                id="message"
                                value={message}
                                onChange={inputChangeHandler}
                            ></textarea>
                        </div>
                        {!formInputValidity.message && (
                            <p className="error">Please provide a message</p>
                        )}
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
