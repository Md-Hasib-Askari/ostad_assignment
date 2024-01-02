import { Header } from "../components/Header.jsx";
import { Carousel } from "../components/Carousel.jsx";
import { BannerArea } from "../components/BannerArea.jsx";
import { ProductArea } from "../components/ProductArea.jsx";
import { FashionArea } from "../components/FashionArea.jsx";
import { BrandArea } from "../components/BrandArea.jsx";
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <BannerArea />
      <ProductArea />
      <FashionArea />
      <BrandArea />
      <Footer />
    </>
  );
};
