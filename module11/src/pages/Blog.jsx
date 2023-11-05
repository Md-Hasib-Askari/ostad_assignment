import React from 'react';
import HeaderBanner from "../components/HeaderBanner.jsx";
import BlogTemplate from "../components/Blog/BlogTemplate.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import RelatedArticles from "../components/Blog/RelatedArticles.jsx";

function Blog(props) {
    return (
        <div>
            <HeaderBanner pageTitle="Blog" />
            <BlogTemplate />
            <RelatedArticles />
            <div className="w-full h-[1px] border-s bg-slate-600"></div>
            <NewsLetter />
        </div>
    );
}

export default Blog;