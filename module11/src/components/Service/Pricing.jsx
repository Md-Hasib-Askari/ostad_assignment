import React from 'react';
import PricingCard from "./PricingCard.jsx";

function Pricing(props) {
    return (
        <section className="bg-slate-100 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Designed for business teams like yours</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Here at RiseUP we focus on markets where technology, innovation, and capital can unlock long-term value and drive
                        economic growth.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <PricingCard
                        title={"Starter"}
                        description={"Best option for personal use & for your next project."}
                        rate={29}
                        listItems={[
                            "Individual configuration",
                            "No setup, or hidden fees",
                            "Team size: 1 developer",
                            "Premium support: 6 months",
                            "Free updates: 6 months"
                        ]}
                    />
                    <PricingCard
                        title={"Company"}
                        description={"Relevant for multiple users, extended & premium support."}
                        rate={99}
                        listItems={[
                            "Individual configuration",
                            "No setup, or hidden fees",
                            "Team size: 10 developers",
                            "Premium support: 24 months",
                            "Free updates: 24 months"
                        ]}
                    />
                    <PricingCard
                        title={"Enterprise"}
                        description={"Best for large scale uses and extended redistribution rights."}
                        rate={499}
                        listItems={[
                            "Individual configuration",
                            "No setup, or hidden fees",
                            "Team size: 100+ developers",
                            "Premium support: 36 months",
                            "Free updates: 36 months"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

export default Pricing;