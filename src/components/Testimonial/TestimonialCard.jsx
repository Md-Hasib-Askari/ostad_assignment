import {LazyLoadImage} from "react-lazy-load-image-component";

const TestimonialCard = ({imgUrl, description, name, position}) => {
    return (
        <div className="flex flex-col space-y-5 shadow-xl p-8 rounded-2xl">
            <LazyLoadImage className="w-1/2 mx-auto" src={imgUrl} alt=""/>
            <p className="text-center text-gray-500 text-sm md:text-md">
                {description}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-center">
                {name}
            </h2>
            <p className="text-center text-sm md:text-lg">
                {position}
            </p>
        </div>
    );
};

export default TestimonialCard;