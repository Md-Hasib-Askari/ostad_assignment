import bigImg1 from '../../assets/images/products/big/3.webp';
import bigImg2 from '../../assets/images/products/big/3.webp';
import bigImg3 from '../../assets/images/products/big/3.webp';
import smallImg1 from '../../assets/images/products/small/3.webp';
import smallImg2 from '../../assets/images/products/small/3.webp';
import smallImg3 from '../../assets/images/products/small/3.webp';

export const ProductDetails = () => {
    return (
        <section className="py-20 flex mx-auto max-w-screen-xl">
            <div className="w-1/2">
                <div className="flex flex-col gap-5 items-center justify-center h-full">
                    <a href="#"
                       className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <img className="w-full rounded-lg" src={bigImg1} alt="product"/>
                    </a>
                    <div className="flex gap-5">
                        <a href="#"
                           className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img className="w-full rounded-lg" src={smallImg1} alt="product"/>
                        </a>
                        <a href="#"
                           className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img className="w-full rounded-lg" src={smallImg2} alt="product"/>
                        </a>
                        <a href="#"
                           className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img className="w-full rounded-lg" src={smallImg3} alt="product"/>
                        </a>
                    </div>

                </div>
            </div>
            <div className="w-1/2 flex flex-col">
                <div>
                    <h3>Modern Smart Phone</h3>
                    <h3>$20.90</h3>


                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                    </div>
                    <hr/>
                    <p>
                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor
                    </p>
                    <div className="flex gap-5">
                        <div>
                            <label htmlFor="countries"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                            <select id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Black</option>
                                <option value="Golden">Golden</option>
                                <option value="White">White</option>
                            </select>

                        </div>
                        <div>
                            <label htmlFor="countries"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                            <select id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>XL</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>

                        </div>
                    </div>
                    <div>
                        <h4><span>SKU: </span>Ch-256xl</h4>
                        <h4><span>Categories: </span>Smart Device,ETC</h4>
                        <h4><span>Tags: </span>Smart Device, Phone</h4>
                    </div>


                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                            data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                                        data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">Information
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button
                                    className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                                    aria-controls="dashboard" aria-selected="false">Description
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button
                                    className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                                    aria-controls="settings" aria-selected="false">Reviews
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                             aria-labelledby="profile-tab">
                            <div className="product-anotherinfo-wrapper text-start">
                                <ul>
                                    <li><span>Weight</span> 400 g</li>
                                    <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                    <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                    <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard"
                             role="tabpanel" aria-labelledby="dashboard-tab">
                            <div className="product-description-wrapper">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incidid
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip efgx ea co consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occae cupidatat non proident, sunt in culpa qui
                                </p>
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel"
                             aria-labelledby="settings-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content
                                the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's
                                    associated content</strong>. Clicking another tab will toggle the visibility of this
                                one for the next. The tab JavaScript swaps classes to control the content visibility and
                                styling.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}