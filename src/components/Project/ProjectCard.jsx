const ProjectCard = ({imgUrl, title}) => {
    return (
        <div className="flex flex-col space-y-5 shadow-xl p-8 rounded-2xl">
            <img className="w-fit" src={imgUrl} alt=""/>
            <h2 className="text-xl md:text-2xl font-bold text-center">
                {title}
            </h2>
        </div>
    );
};

export default ProjectCard;