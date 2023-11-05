import HeaderBanner from "../components/HeaderBanner.jsx";
import ContactForm from "../components/Contact/ContactForm.jsx";
import GetInTouch from "../components/Contact/GetInTouch.jsx";

function Contact() {
    return (
        <div>
            <HeaderBanner pageTitle="Contact Us" />
            <GetInTouch />
            <ContactForm />
        </div>
    );
}

export default Contact;