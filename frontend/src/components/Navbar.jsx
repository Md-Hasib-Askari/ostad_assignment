import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import {BsMoon, BsSun} from "react-icons/bs";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setDarkMode(!darkMode);
    }
    const handleMenu = () => {
        document.getElementById('navbar-default').classList.toggle('hidden');
    }
    return (
        <nav className="bg-primary-400 border-gray-200 dark:bg-primary-900">
            <div className="relative max-w-screen-xl flex flex-wrap items-center gap-5 mx-auto py-4 px-5 xl:px-0">
                <div className="absolute top-5 xl:right-0 right-5">
                    <button onClick={() => handleDarkMode()} className="text-slate-800 dark:text-white">
                        {darkMode ? <BsSun /> : <BsMoon />}
                    </button>
                </div>
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Student</span>
                </Link>
                <button onClick={handleMenu} data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-200"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 rounded text-gray-800 dark:text-white"
                               aria-current="page">Student List</NavLink>
                        </li>
                        <li>
                            <NavLink to="addStudent"
                                     className="block py-2 px-3 rounded text-gray-800 dark:text-white">
                                Add Student
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;