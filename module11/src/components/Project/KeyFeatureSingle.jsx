import React from 'react';

function KeyFeatureSingle({title, image}) {
    return (
        <a href="#"
           className="flex flex-col items-center justify-center h-48 w-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="rounded-t-lg h-30 md:rounded-none md:rounded-l-lg"
                 src={image} alt=""/>
            <div className="flex flex-col justify-between pt-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </div>
        </a>
    );
}

export default KeyFeatureSingle;