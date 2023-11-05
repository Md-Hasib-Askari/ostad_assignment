import React from 'react';
import {HiPresentationChartLine} from "react-icons/hi";
import {FaDollarSign, FaGraduationCap} from "react-icons/fa";
import {MdBusinessCenter} from "react-icons/md";
import ServiceSingle from "./ServiceSingle.jsx";

function AllServices(props) {
    return (
        <section className="bg-slate-100 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Designed for business teams like yours
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Here at RiseUP we focus on markets
                        where technology, innovation, and capital can unlock long-term value and drive economic
                        growth.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <ServiceSingle
                        title={"Marketing"}
                        description={"Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."}
                        icon={<HiPresentationChartLine className={"w-5 h-5 lg:w-6 lg:h-6"} />}
                    />
                    <ServiceSingle
                        title={"Legal"}
                        description={"Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."}
                        icon={<FaGraduationCap className={"w-5 h-5 lg:w-6 lg:h-6"} />}
                    />
                    <ServiceSingle
                        title={"Business Automation"}
                        description={"Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."}
                        icon={<MdBusinessCenter className={"w-5 h-5 lg:w-6 lg:h-6"} />}
                    />
                    <ServiceSingle
                        title={"Finance"}
                        description={"Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."}
                        icon={<FaDollarSign className={"w-5 h-5 lg:w-6 lg:h-6"} />}
                    />
                </div>
            </div>
        </section>
    );
}

export default AllServices;