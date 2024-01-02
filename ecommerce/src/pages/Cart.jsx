import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Heading } from "../components/SingleProduct/Heading.jsx";
import { CartItems } from "../components/Cart/CartItems.jsx";

export const Cart = () => {
  return (
    <>
      <Header />
      <Heading pageTitle="Cart" />
      <CartItems />
      <Footer />
    </>
  );
};
