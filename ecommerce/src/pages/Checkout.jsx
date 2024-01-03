import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { Billing } from "../components/Checkout/Billing.jsx";
import { Heading } from "../components/SingleProduct/Heading.jsx";

export const Checkout = () => {
  return (
    <>
      <Header />
      <Heading pageTitle={"Checkout"} />
      <Billing />
      <Footer />
    </>
  );
};
