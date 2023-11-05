import React from 'react';

function Footer() {
    const footerMenu = ["About", "Premium", "Campaigns", "Blog", "Affiliate Program", "FAQs", "Contact"];
    return (
        <footer className="p-4 bg-slate-300 md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#"
                   className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    RiseUP
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">Your development partner.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    {footerMenu.map((item, index)=>(
                        <li key={index}>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">{item}</a>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 <a href="#" className="hover:underline">RiseUP™</a>. All Rights Reserved.
                </p>
                <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Developed with ❤️ By <a href="#" className="font-medium hover:underline">Md Hasib Askari</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;