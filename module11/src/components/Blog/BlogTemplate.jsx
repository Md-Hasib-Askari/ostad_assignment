import React from 'react';
import {AiFillVideoCamera} from "react-icons/ai";
import BlogTile from "./BlogTile.jsx";
import {MdArticle} from "react-icons/md";

function BlogTemplate() {
    return (
        <main className="bg-slate-300 dark:bg-gray-800 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <section className="dark:bg-gray-800">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="grid gap-8">
                            <BlogTile
                            icon={<AiFillVideoCamera />}
                            category="Tutorial"
                            days="14"
                            title="How to quickly deploy a static website"
                            description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers."
                            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                            author="Jese Leos"/>

                            <BlogTile
                                icon={<MdArticle />}
                                category="Article"
                                days="14"
                                title="Our first project with React"
                                description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers."
                                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                author="Bonnie Green"/>

                            <BlogTile
                                icon={<MdArticle />}
                                category="Article"
                                days="14"
                                title="Our first project with React"
                                description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers."
                                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                author="Bonnie Green"/>

                            <BlogTile
                                icon={<MdArticle />}
                                category="Article"
                                days="14"
                                title="Our first project with React"
                                description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers."
                                image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                author="Bonnie Green"/>

                        </div>
                    </div>
                </section>
            </div>
        </main>

    );
}

export default BlogTemplate;