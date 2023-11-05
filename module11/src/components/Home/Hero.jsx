import {AiOutlineRight, AiOutlineArrowRight} from "react-icons/ai";
import {useEffect, useRef} from "react";

function Hero() {
    const typeWriterText = useRef();
    let i = 0, j = 0;
    let txt = ['App Development', 'Web Development', 'Cloud']; /* The text */
    let speed = 200; /* The speed/duration of the effect in milliseconds */
    function typeWriter() {
        if (i < txt[j].length) {
            typeWriterText.current.innerHTML += txt[j].charAt(i++);
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                i = 0;
                j = j < 2 ? j+1 : 0;
                typeWriterText.current.innerHTML = "";
                setTimeout(typeWriter, speed);
            }, 1000);
        }
    }
    useEffect(() => {
        typeWriterText.current.innerHTML = "";
        typeWriter();
    }, []);
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#"
                   className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                   role="alert">
                    <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span
                    className="text-sm font-medium">RiseUP is on the GO!</span>
                    <AiOutlineRight className="ml-2 w-5 h-5"/>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    We provide the best <span ref={typeWriterText} className="text-blue-400">development</span> services.
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    We are team of talented designers making websites with Bootstrap and React. We create unique web pages that are responsive and customizable.
                </p>
                <div
                    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#"
                       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Learn More
                        <AiOutlineArrowRight className="ml-2 w-5 h-5"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;