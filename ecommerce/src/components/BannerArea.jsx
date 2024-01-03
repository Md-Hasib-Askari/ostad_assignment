import product3 from "../assets/images/p-3.webp";
import product4 from "../assets/images/product-4.webp";
import product5 from "../assets/images/product-5.webp";
import { Product } from "./Product.jsx";

export const BannerArea = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 px-5 xl:px-0 max-w-screen-xl mx-auto my-20">
      <div className="lg:w-1/2">
        <Product productImg={product3} isFull={true} />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-5 justify-between">
        <Product productImg={product4} />
        <Product productImg={product5} />
      </div>
    </div>
  );
};
