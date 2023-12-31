import bigImg1 from "../../assets/images/products/big/1.webp";
import bigImg2 from "../../assets/images/products/big/2.webp";
import bigImg3 from "../../assets/images/products/big/3.webp";
import smallImg1 from "../../assets/images/products/small/1.webp";
import smallImg2 from "../../assets/images/products/small/2.webp";
import smallImg3 from "../../assets/images/products/small/3.webp";
import { BsHeart } from "react-icons/bs";

export const ProductDetails = () => {
  const bigImages = [bigImg1, bigImg2, bigImg3];
  const smallImages = [smallImg1, smallImg2, smallImg3];

  const tabContent = ["Information", "Description", "Reviews"];

  function changeTab(tab) {
    switch (tab) {
      case "Information":
        document.getElementById("information").classList.remove("hidden");
        document.getElementById("description").classList.add("hidden");
        document.getElementById("reviews").classList.add("hidden");
        break;
      case "Description":
        document.getElementById("information").classList.add("hidden");
        document.getElementById("description").classList.remove("hidden");
        document.getElementById("reviews").classList.add("hidden");
        break;
      case "Reviews":
        document.getElementById("information").classList.add("hidden");
        document.getElementById("description").classList.add("hidden");
        document.getElementById("reviews").classList.remove("hidden");
        break;
      default:
        break;
    }
  }

  return (
    <section className="py-20 flex flex-col gap-5 lg:flex-row items-center mx-auto max-w-screen-xl">
      <div className="lg:w-1/2">
        <div className="flex flex-col gap-5 items-center justify-center px-5 h-full">
          <a
            href="#"
            className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img className="w-full rounded-lg" src={bigImg1} alt="product" />
          </a>
          <div className="flex gap-5">
            {smallImages.map((img, index) => (
              <a
                key={index}
                href="#"
                className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <img className="w-full rounded-lg" src={img} alt="product" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full px-5 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl">Modern Smart Phone</h3>
          <h3>$20.90</h3>

          <div className="flex items-center">
            {Array.from(Array(5).keys()).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 out of 5
            </p>
          </div>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
            eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exet commodo consequat. Duis aute irure dolor
          </p>
          <div className="flex gap-5">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Color
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Black</option>
                <option value="Golden">Golden</option>
                <option value="White">White</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Size
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>XL</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
          </div>
          <div>
            <h4>
              <span className="text-primary-500 font-medium">SKU: </span>
              Ch-256xl
            </h4>
            <h4>
              <span className="text-primary-500 font-medium">Categories: </span>
              Smart Device, ETC
            </h4>
            <h4>
              <span className="text-primary-500 font-medium">Tags: </span>Smart
              Device, Phone
            </h4>
          </div>

          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="max-w-[120px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex gap-5">
              <button className="max-w-10">-</button>
              <input
                className="cart-plus-minus-box w-[20px] text-center bg-transparent"
                type="text"
                name="qtybutton"
                value="1"
              />
              <button className="inc qtybutton">+</button>
            </div>
            <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-48 text-center">
              <button className="add-cart"> Add To Cart</button>
            </div>
            <div className="w-fit text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex gap-5">
              <a href="wishlist.html" className="my-auto">
                <BsHeart size={25} />
              </a>
            </div>
          </div>

          <div className=" border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              {tabContent.map((tab, index) => (
                <li className="me-2" role="presentation" key={index}>
                  <button
                    className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => changeTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="information"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="product-anotherinfo-wrapper text-start">
                <ul>
                  <li>
                    <span>Weight</span> 400 g
                  </li>
                  <li>
                    <span>Dimensions</span>10 x 10 x 15 cm
                  </li>
                  <li>
                    <span>Materials</span> 60% cotton, 40% polyester
                  </li>
                  <li>
                    <span>Other Info</span> American heirloom jean shorts pug
                    seitan letterpress
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="description"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div className="product-description-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius tempor incidid ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip efgx ea co consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occae cupidatat non
                  proident, sunt in culpa qui
                </p>
              </div>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="reviews"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  reviews tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
