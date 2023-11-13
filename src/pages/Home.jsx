import Hero from "../components/Home/Hero.jsx";
import Partner from "../components/Home/Partner.jsx";
import WorkList from "../components/Home/WorkList.jsx";
import Stats from "../components/Home/Stats.jsx";
import FeatureProject from "../components/Home/FeatureProject.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
    return (
        <div>
            <div className="bg-secondary">
                <Navbar />
                <Hero />
                <Partner />
            </div>
            <WorkList />
            <Stats />
            <div className="bg-[#F0FDF4]">
                <FeatureProject />
            </div>
        </div>
    );
};

export default Home;