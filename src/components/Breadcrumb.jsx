import {AiFillCaretRight, AiFillHome} from "react-icons/ai";
import {NavLink, useLocation} from "react-router-dom";

const Breadcrumb = () => {
    const currentUrl = useLocation().pathname;
    const urlList = {
        "/": "Home",
        "/team": "Team",
        "/service": "Service",
        "/projects": "Projects",
        "/testimonial": "Testimonial",
    };
    const renderComponent = () => {
        return (
            <li>
                <div className="flex items-center">
                    <AiFillCaretRight className="rtl:rotate-180 w-4 h-4 text-gray-400 mx-1" />
                    <NavLink to={currentUrl}
                       className="inactive ms-1 text-sm font-medium text-primary hover:text-primary-600 hover:transform hover:scale-125 hover:duration-300 md:ms-2">{urlList[currentUrl]}</NavLink>
                </div>
            </li>
        )
    }
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <NavLink to="/"
                       className="inactive inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 hover:transform hover:scale-125 hover:duration-300">
                        <AiFillHome className="w-4 h-4 me-2.5"/>
                        Home
                    </NavLink>
                </li>
                {renderComponent()}
            </ol>
        </nav>
    );
};

export default Breadcrumb;