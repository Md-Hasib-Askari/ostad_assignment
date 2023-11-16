import {LazyLoadImage} from "react-lazy-load-image-component";

const SingleProject = ({project, isMain}) => {
    return (
        <div className="flex flex-col justify-between gap-5">
            <LazyLoadImage src={project['imgUrl']} alt=""/>
            <div>
                <p className="text-sm text-gray-500">{project['subtitle']}</p>
                <h2 className={`font-bold ${isMain ? 'text-2xl' : 'text-lg'}`}>{project['title']}</h2>
            </div>
        </div>
    );
};

export default SingleProject;