import {Home} from "./pages/Home.jsx";
import {SingleProduct} from "./pages/SingleProduct.jsx";
import {Error404} from "./pages/Error404.jsx";
import {FAQ} from "./pages/FAQ.jsx";
import {Contact} from "./pages/Contact.jsx";
import {ThankYou} from "./pages/ThankYou.jsx";
import {AuthPage} from "./pages/AuthPage.jsx";
import {Cart} from "./pages/Cart.jsx";
import {Checkout} from "./pages/Checkout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<SingleProduct />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
