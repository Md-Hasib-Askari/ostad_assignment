import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import Navbar from "./components/Navbar.jsx";
import {Footer} from "./components/Footer.jsx";
import {Login} from "./components/Login.jsx";
import {Signup} from "./components/Signup.jsx";
import {OTP} from "./components/OTP.jsx";
import {Profile} from "./components/Profile.jsx";
import {Products} from "./pages/Products.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-account" element={<Signup/>}/>
                <Route path="/otp" element={<OTP/>}/>
                <Route path="/profile" element={<Profile/>}/>


                <Route path="/products" element={<Products/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;