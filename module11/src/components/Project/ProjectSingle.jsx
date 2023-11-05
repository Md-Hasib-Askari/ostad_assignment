import React from 'react';

function ProjectSingle({title, image}) {
    return (
        <article className="max-w-xs">
            <a href="#">
                <img src={image}
                     className="mb-5 rounded-lg" alt="Image 4"/>
            </a>
            <h2 className="mb-2 text-xl text-center font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">{title}</a>
            </h2>
        </article>
    );
}

export default ProjectSingle;