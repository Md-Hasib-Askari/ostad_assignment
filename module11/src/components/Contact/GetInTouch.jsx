import React from 'react';
import ContactUsSVG from "../../assets/images/contact_us.svg";

function GetInTouch() {
    return (
        <div className="w-full flex bg-slate-100 dark:bg-slate-800 md:px-24 py-10">
            <div className="w-1/2 flex flex-col p-10 gap-3 justify-center text-slate-800 dark:text-slate-300">
                <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Get in Touch</h3>
                <p className="text-gray-700 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="flex flex-col gap-2">
                    <div>
                        <h4 className="font-medium">Address</h4>
                        <p>123 Street Name, City, England</p>
                    </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <p>+1 234 567890</p>
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <p>
                            <a href="#">hello@company</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-s border-slate-700"></div>
            <img className="w-1/2 p-10" src={ContactUsSVG} alt=""/>
        </div>
    );
}

export default GetInTouch;