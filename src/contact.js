import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    function sendMessage() {

        const std = {
            name: name,
            email: email,
            message: message
        }

        console.log(std)

        emailjs.send(
            "service_fhnxqrt",
            "template_o44szso",
            std,
            "9UmlCOAw97NpByodY"
        )
            .then(
                (result) => {
                    console.log("Email sent successfully!", result.text);
                },
                (error) => {
                    console.log("Failed to send email:", error.text);
                }
            );
    }

    return (
        <div className="page">
            <h1>Contact Us</h1>

            <div className="contact-box">

                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(event) => { setName(event.target.value) }}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <textarea
                    placeholder="Enter your message"
                    rows="5"
                    onChange={(event) => { setMessage(event.target.value) }}
                ></textarea>

                <button
                    onClick={sendMessage}
                >
                    Send Message
                </button>

            </div>
        </div>
    );
}

export default Contact;
