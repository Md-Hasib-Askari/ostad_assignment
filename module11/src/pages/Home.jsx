import Hero from "../components/Home/Hero.jsx";
import FeaturedContent from "../components/Home/FeaturedContent.jsx";
import SocialProof from "../components/Home/SocialProof.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import React from "react";

function Home() {
    return (
        <div>
            <Hero />
            <SocialProof />
            <FeaturedContent />
            <div className="w-full h-[1px] border-s bg-slate-200 dark:bg-slate-600"></div>
            <NewsLetter />
        </div>
    );
}

export default Home;