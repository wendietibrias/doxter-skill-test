import {  SectionTitle } from "../../components";
import "./contact.css";

const ContactSection = () => {
    return (
        <section className="contact--section">
            <SectionTitle title="Contact Us"/>
            
            <div className="contact--section-form">
                <form className="contact--section-form-container">
                    <input placeholder="Email Address" type="email" name="email" />
                    <input placeholder="Username" type="text" name="name" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button id="form-button">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;