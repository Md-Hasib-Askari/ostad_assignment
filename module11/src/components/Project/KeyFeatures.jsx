import React from 'react';
import KeyFeatureSingle from "./KeyFeatureSingle.jsx";

function KeyFeatures(props) {
    return (
        <div className="p-5 w-full bg-slate-300 dark:bg-slate-900">
            <h1 className="mb-5 text-3xl text-center font-bold tracking-tight text-gray-900 dark:text-slate-300">
                Key Features
            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                <KeyFeatureSingle
                    title="Home Page"
                    image="./images/project/features/img.png"
                />
                <KeyFeatureSingle
                    title="Home Page"
                    image="./images/project/features/img_1.png"
                />
                <KeyFeatureSingle
                    title="Home Page"
                    image="./images/project/features/img_2.png"
                />
                <KeyFeatureSingle
                    title="Home Page"
                    image="./images/project/features/img_3.png"
                />
                <KeyFeatureSingle
                    title="Home Page"
                    image="./images/project/features/img_4.png"
                />
                <KeyFeatureSingle
                    title="Home Page"
                    image="./images/project/features/img_5.png"
                />
            </div>
        </div>
    );
}

export default KeyFeatures;