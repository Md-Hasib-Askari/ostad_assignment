import {FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="p-4 text-white bg-black sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between mb-10 gap-20">
                    <div className="mb-6 md:mb-0 flex flex-col gap-5">
                        <a href="#" className='flex'>
                            <span
                                className="uppercase text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Web Logo
                            </span>
                        </a>
                        <p className="max-w-[250px]">
                            Some footer text about the  Agency. Just a little description to help people understand you better
                        </p>
                        <div className="flex mt-4 space-x-4 sm:mt-0">
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white bg-primary p-2 rounded-full">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white bg-primary p-2 rounded-full">
                                <FaXTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white bg-primary p-2 rounded-full">
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-gray-900 dark:hover:text-white bg-primary p-2 rounded-full">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Quick Links</h2>
                        <ul className="dark:text-gray-400 flex flex-col gap-3">
                            <li>
                                <a href="#" className="hover:underline">Services</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mt-5 md:mt-0">
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                            Address
                        </h2>
                        <p className="max-w-[250px]">
                            Design Agency Head Office.
                            Airport Road
                            United Arab Emirate
                        </p>
                    </div>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center dark:text-gray-400">
                        © Copyright Design Agency 2022
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;