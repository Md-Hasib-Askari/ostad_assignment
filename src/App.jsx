import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Team from "./pages/Team.jsx";
import Service from "./pages/Service.jsx";
import Project from "./pages/Project.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Newsletter from "./components/Newsletter.jsx";

const App = () => {
    return (
        <div className="font-sans">
            <BrowserRouter basename="/ostad_assignment/">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/projects' element={<Project />} />
                    <Route path='/testimonial' element={<Testimonial />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default App;