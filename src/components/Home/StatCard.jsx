import {LazyLoadImage} from "react-lazy-load-image-component";

const StatCard = ({work}) => {
    return (
        <div
            className="w-[250px] h-[250px] flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-lg bg-secondary lg:h-16 lg:w-16 dark:bg-primary-900">
                <LazyLoadImage className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" src={work['imgUrl']} alt=""/>
            </div>
            <span>
                <h5 className="mb-2 text-2xl font-[700] tracking-tight text-gray-900 dark:text-white">
                    {work['count']}
                </h5>
            </span>
            <p className="mb-3 font-[600] text-sm text-gray-700 dark:text-gray-400">
                {work['title']}
            </p>

        </div>
    );
};

export default StatCard;