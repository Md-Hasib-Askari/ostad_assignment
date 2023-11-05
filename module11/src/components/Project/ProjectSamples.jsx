import React from 'react';
import ProjectSingle from "./ProjectSingle.jsx";

function ProjectSamples(props) {
    return (
        <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    <ProjectSingle
                        image={`./images/project/img.png`}
                        title="Home Page 1"
                        />
                    <ProjectSingle
                        image="./images/project/img_1.png"
                        title="Home Page 2"
                        />
                    <ProjectSingle
                        image="./images/project/img_3.png"
                        title="Home Page 3"
                        />
                    <ProjectSingle
                        image="./images/project/img_4.png"
                        title="Coming Soon"
                        />
                </div>
            </div>
        </aside>
    );
}

export default ProjectSamples;