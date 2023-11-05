import React from 'react';
import HeaderBanner from "../components/HeaderBanner.jsx";
import RelatedArticles from "../components/Blog/RelatedArticles.jsx";
import ProjectSamples from "../components/Project/ProjectSamples.jsx";
import KeyFeatures from "../components/Project/KeyFeatures.jsx";
import NewsLetter from "../NewsLetter.jsx";

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