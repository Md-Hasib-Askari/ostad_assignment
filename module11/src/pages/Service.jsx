import HeaderBanner from "../components/HeaderBanner.jsx";
import AllServices from "../components/Service/AllServices.jsx";
import Pricing from "../components/Service/Pricing.jsx";
import CTA from "../components/CTA.jsx";
import React from "react";

function Service() {
    return (
        <div>
            <HeaderBanner pageTitle="Services" />
            <AllServices />
            <CTA />
            <Pricing />
            <div className="w-full dark:h-[1px] border-s bg-slate-600"></div>
        </div>
    );
}


export default Service;