import React from 'react';
import {AiFillFacebook, AiFillGithub, AiOutlineDribbbleSquare, AiOutlineTwitter} from "react-icons/ai";

function TeamTile({image, name, position, description}) {
    return (
        <div
            className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-lg sm:rounded-none sm:rounded-l-lg"
                     src={image}
                     alt="Bonnie Avatar" />
            </a>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{position}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <AiFillFacebook className="w-5 h-5" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <AiOutlineTwitter className="w-5 h-5" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <AiFillGithub className="w-5 h-5" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <AiOutlineDribbbleSquare />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TeamTile;