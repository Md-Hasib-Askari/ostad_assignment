import {useEffect, useState} from "react";
import {BsArrowRight} from "react-icons/bs";
import {LazyLoadImage} from "react-lazy-load-image-component";

const WorkList = () => {
    const [workList, setJsonData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./database/Home/work_list.json');
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <section className="bg-white md:p-5">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-0">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <p className="uppercase mb-2 font-bold text-primary">Work List</p>
                    <h2 className="max-w-lg mb-4 text-2xl tracking-tight font-bold text-gray-900">
                        We provide the Perfect Solution to your business growth
                    </h2>
                </div>
                <div className="space-y-8 flex flex-col md:flex-row md:flex-wrap md:gap-12 md:space-y-0">
                    {workList.map((work, index) => (
                        <div key={index}>
                            <div
                                className="flex justify-center items-center mb-4 w-10 h-10 rounded-lg bg-secondary lg:h-16 lg:w-16">
                                <LazyLoadImage className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" src={work['imgUrl']} alt=""/>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">{work['title']}</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
                                {work['description']}
                            </p>
                            <a href="#"
                                    className="hover:text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-md text-sm px-5 py-3 text-center me-2 mb-2">
                                Learn More {<BsArrowRight className="inline" />}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkList;