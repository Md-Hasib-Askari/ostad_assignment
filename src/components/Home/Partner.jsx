import {LazyLoadImage} from "react-lazy-load-image-component";

const Partner = () => {
    return (
        <section className="bg-transparent dark:bg-gray-900 pb-10 overflow-x-hidden">
            <div className="w-screen bg-white">
                <div className="px-4 xl:px-0 py-8 lg:py-16 mx-auto max-w-screen-xl">
                    <div
                        className="flex flex-wrap gap-5 justify-center md:justify-between text-gray-500 dark:text-gray-400">
                        <a href="#" className="flex justify-center items-center">
                            <LazyLoadImage width='100px' src="./assets/Home/partner1.svg" alt=""/>
                        </a>
                        <a href="#" className="flex justify-center items-center">
                            <LazyLoadImage width='100px' src="./assets/Home/partner2.png" alt=""/>
                        </a>
                        <a href="#" className="flex justify-center items-center">
                            <LazyLoadImage width='100px' src="./assets/Home/partner3.svg" alt=""/>
                        </a>

                        <a href="#" className="flex justify-center items-center">
                            <LazyLoadImage width='100px' src="./assets/Home/partner4.png" alt=""/>
                        </a>
                        <a href="#" className="flex justify-center items-center">
                            <LazyLoadImage width='100px' src="./assets/Home/partner5.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;