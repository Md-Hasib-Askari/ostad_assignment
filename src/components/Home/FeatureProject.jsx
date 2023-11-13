import {useEffect, useState} from "react";
import SingleProject from "./SingleProject.jsx";

const FeatureProject = () => {
    const [projectList, setJsonData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./database/Home/feature_product.json');
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-5 xl:px-0">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <p className="uppercase mb-2 font-bold text-primary">Featured Project</p>
                    <h2 className="max-w-lg mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
                        We provide the Perfect Solution to your business growth
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        { projectList.length > 0 ? <SingleProject project={projectList[0]} isMain={true} /> : null}
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2 gap-5 justify-between">
                        {projectList.map((project, index) => {
                                if (index > 0) {
                                    return <SingleProject key={index} project={project} />
                                }
                            }
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureProject;