import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Heading} from "../components/SingleProduct/Heading.jsx";
import {ContactForm} from "../components/Contact/ContactForm.jsx";

export const Contact = () => {
    return (
        <>
            <Header />
            <Heading pageTitle="Contact Us" />
            <ContactForm />
            <Footer />
        </>
    )
}