import Navbar from "../components/Navbar.jsx";
import Heading from "../components/Heading.jsx";
import {useState} from "react";
import TestimonialCard from "../components/Testimonial/TestimonialCard.jsx";

const Project = () => {
    const [testimonialList, setTestimonial] = useState([]);
    useState(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./database/Testimonial/testimonial_list.json');
                const data = await response.json();
                setTestimonial(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="bg-light px-5">
                <Navbar />
                <Heading pageTitle="All Project"/>
            </div>
            <div className="py-8 px-5 mx-auto max-w-screen-xl sm:py-16 xl:px-0">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <p className="uppercase mb-2 font-bold text-primary">All Project</p>
                    <h2 className="max-w-sm mb-4 text-2xl tracking-tight font-bold text-gray-900">
                        Better Agency/SEO Solution At Your Fingertips
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {
                        testimonialList.map((testimonial, index) => (
                            <TestimonialCard key={index} imgUrl={testimonial.imgUrl} description={testimonial.description} name={testimonial.name} position={testimonial.position} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;