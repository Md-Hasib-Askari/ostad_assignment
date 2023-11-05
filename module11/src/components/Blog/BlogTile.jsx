import React from 'react';
import {BsArrowRight} from "react-icons/bs";

function BlogTile({title, description, author, days, image, icon, category}) {
    return (
        <article
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span
                    className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <span className="mr-1 w-3 h-3">{icon}</span>
                    {category}
                </span>
                <span className="text-sm">{days} days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{title}</a></h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full"
                         src={image}
                         alt="Jese Leos avatar"/>
                    <span className="font-medium dark:text-white">{author}</span>
                </div>
                <a href="#"
                   className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    Read more
                    <BsArrowRight className="ml-2 w-4 h-4"/>
                </a>
            </div>
        </article>
    );
}

export default BlogTile;