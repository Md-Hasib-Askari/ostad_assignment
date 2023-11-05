import {useEffect, useRef} from "react";

function SocialProof() {
    const customerCount = useRef("");
    const developerCount = useRef("");
    const companyCount = useRef("");

    function countUp(reference, increment, end) {
        let current = 0;
        let interval = setInterval(() => {
            current += increment;
            reference.current.innerHTML = current.toString();
            if (current >= end) {
                clearInterval(interval);
            }
        }, 50);
    }
    useEffect(() => {
        countUp(customerCount, 3, 75);
        countUp(developerCount, 1, 36);
        countUp(companyCount, 1, 12);
    }, []);

    return (
        <section className="py-10 bg-slate-100 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-2 text-3xl md:text-4xl font-extrabold"><span ref={customerCount}></span>K+</p>
                        <p className="font-light text-gray-500 dark:text-gray-400">Customers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-2 text-3xl md:text-4xl font-extrabold"><span ref={developerCount}></span>+</p>
                        <p className="font-light text-gray-500 dark:text-gray-400">Developers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-2 text-3xl md:text-4xl font-extrabold"><span ref={companyCount}></span>K+</p>
                        <p className="font-light text-gray-500 dark:text-gray-400">Companies</p>
                    </div>
                </dl>
            </div>
        </section>
    );
}

export default SocialProof;