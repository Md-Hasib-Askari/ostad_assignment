import {HiMail} from "react-icons/hi";

const Newsletter = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <p className="uppercase mb-2 font-bold text-primary">Subscribe</p>
                    <h2 className="flex justify-center mb-4 text-2xl tracking-tight capitalize font-bold text-gray-900 sm:text-4xl dark:text-white">
                        <span className="max-w-lg flex">Subscribe to get the latest news about us</span>
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light capitalize text-sm text-gray-500 md:mb-12 dark:text-gray-400">
                        Please drop your email below to get daily update about what we do
                    </p>
                    <form action="#">
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label htmlFor="email"
                                       className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                    address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <HiMail className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                                </div>
                                <input
                                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter your email address" type="email" id="email" required="" />
                            </div>
                            <div>
                                <button type="submit"
                                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-danger border-danger sm:rounded-none sm:rounded-r-lg hover:bg-danger-800">Subscribe
                                </button>
                            </div>
                        </div>
                        <div
                            className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We
                            care about the protection of your data. <a href="#"
                                                                       className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read
                                our Privacy Policy</a>.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;