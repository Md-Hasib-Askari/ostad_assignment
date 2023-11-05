import React from 'react';

function ServiceSingle({title, description, icon}) {
    return (
        <div>
            <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <span className="text-primary-600 dark:text-primary-300">
                    {icon}
                </span>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    );
}

export default ServiceSingle;