import {Link, NavLink} from "react-router-dom";
import {HiMenu} from "react-icons/hi";

const Navbar = () => {
    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Team',
            path: '/team'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Projects',
            path: '/projects'
        },
        {
            title: 'Testimonial',
            path: '/testimonial'
        }
    ];
    const handleToggle = () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('hidden');
    };
    return (
        <nav
            className="bg-transparent dark:bg-gray-900 w-full">
            <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto py-8">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        className="self-center text-xl font-bold whitespace-nowrap">
                        Design<span className="text-danger uppercase">Agency</span>
                    </span>
                </Link>
                <div className="flex gap-10 lg:w-fit items-center justify-between lg:justify-center">
                    <div className="hidden items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
                         id="navbar">
                        <ul className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 p-5 lg:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 bg-transparent">
                            {
                                navLinks.map((navLink, index) => (
                                    <li key={index}>
                                        <NavLink to={navLink.path}
                                                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 lg:hover:transform lg:hover:scale-125 lg:hover:duration-500">
                                            {navLink.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            <li>
                                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                                    <Link to='/login'
                                            className="outline outline-primary outline-1 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 hover:text-white text-center">
                                        Login
                                    </Link>

                                </div>
                            </li>
                            <li>
                                <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                                    <Link to='/register'
                                            className="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Register
                                    </Link>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="true"
                            onClick={() => {handleToggle()}}
                    >
                        <span className="sr-only">Open main menu</span>
                        <HiMenu className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;