import Navbar from "../components/Navbar.jsx";
import Heading from "../components/Heading.jsx";
import {useEffect, useState} from "react";
import TeamCard from "../components/Team/TeamCard.jsx";

const Team = () => {
    const [teamList, setTeam] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./database/Team/member.json');
                const data = await response.json();
                setTeam(data);
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
                <Heading pageTitle="Team"/>
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 xl:px-0">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <p className="uppercase mb-2 font-bold text-primary">Our Team Member</p>
                    <h2 className="max-w-sm mb-4 text-2xl tracking-tight font-bold text-gray-900">
                        Check our awesome team members
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-5 items-center md:justify-between">
                    {
                        teamList.map((team, index) => (
                            <TeamCard key={index} imgUrl={team.imgUrl} name={team.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;