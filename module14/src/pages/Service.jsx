import Navbar from "../components/Navbar.jsx";
import Heading from "../components/Heading.jsx";
import ServiceCard from "../components/Service/ServiceCard.jsx";
import {useState} from "react";

const Service = () => {
    const [serviceList, setService] = useState([]);
    useState(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./database/Service/all_service.json');
                const data = await response.json();
                setService(data);
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
                <Heading pageTitle="Our Services"/>
            </div>
            <div className="py-8 px-5 mx-auto max-w-screen-xl sm:py-16 xl:px-0">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <p className="uppercase mb-2 font-bold text-primary">Our All Services</p>
                    <h2 className="max-w-sm mb-4 text-2xl tracking-tight font-bold text-gray-900">
                        We Provide Best Web design services
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {
                        serviceList.map((service, index) => (
                            <ServiceCard key={index} imgUrl={service.imgUrl} title={service.title} description={service.description} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;