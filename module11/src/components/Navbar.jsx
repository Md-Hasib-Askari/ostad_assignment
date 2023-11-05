import React from 'react';
import {NavLink} from "react-router-dom";
import {FiMenu, FiSun} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";

function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'Services', link: '/services'},
        {name: 'About', link: '/about'},
        {name: 'Project', link: '/project'},
        {name: 'Blog', link: '/blog'},
        {name: 'Contact', link: '/contact'},
    ];
    return (
        <header>
            <nav className="bg-slate-300 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center">
                        <img src="https://riseuplabs.com/wp-content/uploads/2021/03/riseup-labs-logo-specifics-white-300x258.png" className="mr-3 h-6 sm:h-9"
                             alt="RiseUP"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap text-slate-800 dark:text-white">RiseUP</span>
                    </NavLink>
                    <div className="flex items-center lg:order-2">
                        <button onClick={toggleDarkMode}
                           className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            <FiSun size={25}/>
                        </button>
                        <a href="#"
                           className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
                            started</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false"
                                onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {menuOpen ? <AiOutlineClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className={`${menuOpen ? "" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.link}
                                       className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-slate-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;