import {LazyLoadImage} from "react-lazy-load-image-component";

const ServiceCard = ({title, description, imgUrl}) => {
    return (
        <div className="flex flex-col space-y-5 shadow-xl p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">
                {title}
            </h2>
            <p className="text-dark-lighter">
                {description}
            </p>
            <div className="grid grid-rows-2">
                <div className="flex">
                    <LazyLoadImage className="w-2/3" src={imgUrl[0]} alt=""/>
                    <LazyLoadImage className="w-1/3" src={imgUrl[1]} alt=""/>
                </div>
                <div className="grid grid-cols-2">
                    <LazyLoadImage src={imgUrl[2]} alt=""/>
                    <LazyLoadImage src={imgUrl[3]} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;