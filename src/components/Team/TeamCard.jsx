import {FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6";
import {LazyLoadImage} from "react-lazy-load-image-component";

const TeamCard = ({imgUrl, name}) => {
    return (
        <div
            className="lg:max-w-sm max-w-[200px] bg-white border border-gray-200 rounded-3xl shadow">
            <div className="relative">
                <div className="h-12 p-5 absolute inset-2.5 top-3/4 flex items-center justify-center bg-transparent ">
                    <div className="grid grid-cols-3 justify-items-center divide-x divide-gray-100 py-2 px-2 bg-white rounded-3xl">
                        <FaFacebook className="w-10 h-10 p-2 text-gray-500 hover:transform hover:scale-125 cursor-pointer"/>
                        <FaXTwitter className="w-10 h-10 p-2 text-gray-500 hover:transform hover:scale-125 cursor-pointer"/>
                        <FaInstagram className="w-10 h-10 p-2 text-gray-500 hover:transform hover:scale-125 cursor-pointer"/>
                    </div>
                </div>
                <LazyLoadImage className="rounded-t-lg" src={imgUrl} alt=""/>
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">
                        {name}
                    </h5>
                </a>
            </div>
        </div>

    );
};

export default TeamCard;