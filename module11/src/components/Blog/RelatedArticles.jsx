import React from 'react';
import RelatedArticleSingle from "./RelatedArticleSingle.jsx";

function RelatedArticles(props) {
    return (
        <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    <RelatedArticleSingle
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                        title="Our first office"
                        description="Over the past year, Volosoft has undergone many changes! After months of preparation."
                        minutes="2"/>
                    <RelatedArticleSingle
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                        title="Enterprise design tips"
                        description="Over the past year, Volosoft has undergone many changes! After months of preparation."
                        minutes="12"/>
                    <RelatedArticleSingle
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                        title="We partnered with Google"
                        description="Over the past year, Volosoft has undergone many changes! After months of preparation."
                        minutes="8"/>
                    <RelatedArticleSingle
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                        title="How we created our new website"
                        description="Over the past year, Volosoft has undergone many changes! After months of preparation."
                        minutes="5"/>
                </div>
            </div>
        </aside>
    );
}

export default RelatedArticles;