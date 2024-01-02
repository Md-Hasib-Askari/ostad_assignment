import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Heading } from "../components/SingleProduct/Heading.jsx";
import { ProductList } from "../components/ProductList.jsx";

export const ProductPage = () => {
  return (
    <>
      <Header />
      <Heading pageTitle={"Product Page"} />
      <ProductList />
      <Footer />
    </>
  );
};
