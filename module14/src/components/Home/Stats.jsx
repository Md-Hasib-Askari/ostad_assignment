import StatCard from "./StatCard.jsx";
import {useEffect, useState} from "react";

const Stats = () => {
    const [counterData, setCounterData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('./database/Home/counter.json');
                const data = await res.json();
                setCounterData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="w-full py-4 my-5">
            <div className="max-w-screen-xl mx-auto flex flex-wrap gap-5 justify-center lg:justify-between lg:p-5">
                {
                    counterData.map((item, index) => {
                        return (
                            <StatCard key={index} work={item}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Stats;