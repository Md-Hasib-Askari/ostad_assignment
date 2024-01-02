import logo from "../assets/images/logo.webp";
import {SearchBar} from "./SearchBar.jsx";
import {BsCart, BsHeart} from "react-icons/bs";
import {Link, NavLink} from "react-router-dom";

export const TopHeader = () => {
    return (
        <div className="flex justify-between">
            <NavLink to="/" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9"
                     alt=""/>
            </NavLink>
            <SearchBar />
            <div className="flex gap-3 items-center">
                <a href="#offcanvas-wishlist" className="">
                    <BsHeart className="size-8 text-white" />
                </a>
                <Link to="/cart"
                        className="relative items-center font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <BsCart className="size-8 text-white" />
                    <span className="sr-only">Cart</span>
                    <div
                        className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                        01
                    </div>
                </Link>

            </div>
        </div>
    )
}