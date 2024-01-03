import { ProductCard } from "./ProductCard.jsx";
import { Pagination } from "./Pagination.jsx";
import { FaList, FaTh } from "react-icons/fa";

export const ProductList = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 xl:px-0 py-20">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <p className="border-2 text-center border-gray-200 p-5 rounded-xl">
            <span className="text-primary-500 font-medium">12</span> Product
            Found of <span className="text-primary-500 font-medium">30</span>
          </p>
          <div className="flex justify-center items-center border-2 border-gray-200 rounded-xl p-2">
            <label
              htmlFor="countries"
              className="w-1/2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sort By:
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Default</option>
              <option value="US">Name, A to Z</option>
              <option value="CA">Name, Z to A</option>
              <option value="FR">Price, low to high</option>
              <option value="DE">Price, high to low</option>
              <option value="DE">Sort By new</option>
              <option value="DE">Sort By old</option>
            </select>
          </div>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="shop-grid"
            role="tabpanel"
          >
            <div className="flex flex-col justify-center pt-5">
              <div className="flex flex-wrap justify-center gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};
