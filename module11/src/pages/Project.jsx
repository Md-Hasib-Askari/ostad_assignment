import React from 'react';
import HeaderBanner from "../components/HeaderBanner.jsx";
import ProjectSamples from "../components/Project/ProjectSamples.jsx";
import KeyFeatures from "../components/Project/KeyFeatures.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

function Project(props) {
    return (
        <div>
            <HeaderBanner pageTitle="Projects" />
            <ProjectSamples />
            <KeyFeatures />
            <NewsLetter />
        </div>
    );
}

export default Project;