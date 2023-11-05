import React from 'react';

function HeaderBanner({pageTitle}) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        {pageTitle}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facere iusto nemo, nostrum odio officiis?
                    </p>
                </div>
            </div>
            <div className="hidden max-w-screen-xl mx-auto">
                <div className="h-1 bg-gray-200 dark:bg-gray-800" />
            </div>
        </section>
    );
}

export default HeaderBanner;