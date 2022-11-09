import { useState } from "react";

import Home_Night from "../../assets/front_nighttime.jpg";
import Home_Night_Blur from "../../assets/front_nighttime_blur.jpg";
import BlurredUpImage from "../BlurredImage";

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

        console.log({ name });
        console.log({ subject });
        console.log({ email });
        console.log({ message });
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
    };

    return (
        <section>
            <div className="contact" id="contact">
                <div className="contact-wrapper">
                    <div className="form-wrapper">
                        <h2>Contact Us</h2>
                        <form
                            onSubmit={onSubmitHandler}
                            action="https://formsubmit.co/1be99fa807bf4d4478f3551d6ad6e605"
                            method="POST"
                        >
                            <div className="row">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        required={true}
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

                            <div className="form-group col">
                                <label htmlFor="email">
                                    Email<span>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required={true}
                                    value={email}
                                    onChange={inputChangeHandler}
                                />
                                {!formInputValidity.email && (
                                    <p className="error">
                                        Please provide valid email
                                    </p>
                                )}
                            </div>
                            <div className="form-group col">
                                <label htmlFor="message">
                                    Message<span>*</span>
                                </label>
                                <textarea
                                    cols="30"
                                    rows="10"
                                    name="message"
                                    id="message"
                                    value={message}
                                    required={true}
                                    onChange={inputChangeHandler}
                                ></textarea>
                                {!formInputValidity.message && (
                                    <p className="error">
                                        Please provide a message
                                    </p>
                                )}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>

                            <input
                                type="text"
                                name="_honey"
                                style={{ display: "none" }}
                            />
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            ></input>
                            <input
                                type="hidden"
                                name="_subject"
                                value="New Client Inquiry!"
                            />
                        </form>
                    </div>
                    <div className="contact-image">
                        {/* <img src={Home_Night} alt="Front of house at night" /> */}
                        <BlurredUpImage
                            tiny={Home_Night_Blur}
                            large={Home_Night}
                            alt="Front of the house at night"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
