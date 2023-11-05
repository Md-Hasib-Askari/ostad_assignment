import React from 'react';
import HeaderBanner from "../components/HeaderBanner.jsx";
import Teams from "../components/About/Teams.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import AboutContent from "../components/About/AboutContent.jsx";
import Testimonial from "../components/About/Testimonial.jsx";

function About(props) {
    return (
        <>
            <HeaderBanner pageTitle="About Us" />
            <AboutContent />
            <Teams />
            <Testimonial />
            <NewsLetter />
        </>
    );
}

export default About;