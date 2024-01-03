import { CartTable } from "./CartTable.jsx";

export const CartItems = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="flex flex-col items-center px-6 lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-screen-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Shopping Cart
            </h1>
          </div>
          <CartTable />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-8 py-10 justify-between items-center">
          <div className="cart-shiping-update">
            <a
              href="#"
              className="px-6 py-3.5 text-sm md:text-base font-medium text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue Shopping
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#"
              className="px-6 py-3.5 text-sm md:text-base font-medium text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Shopping Cart
            </a>
            <button
              type="button"
              className="px-6 py-3.5 text-sm md:text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Clear Shopping Cart
            </button>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-row gap-5 justify-between w-full">
          <div className="w-1/3 min-w-64 max-w-96">
            <div className="p-10 bg-gray-200 flex flex-col gap-5">
              <div className="title-wrap">
                <h4 className="text-xl font-medium">
                  Estimate Shipping And Tax
                </h4>
              </div>
              <div className="flex flex-col gap-5">
                <p>Enter your destination to get a shipping estimate.</p>
                <div className="flex flex-col gap-5">
                  <div className=" flex flex-col gap-5">
                    <label>* Country</label>
                    <select className="email s-email s-wid">
                      <option>Bangladesh</option>
                      <option>Albania</option>
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-5">
                    <label>* Region / State</label>
                    <select className="email s-email s-wid">
                      <option>Bangladesh</option>
                      <option>Albania</option>
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <label>* Zip/Postal Code</label>
                    <input type="text" />
                  </div>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Get A Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 min-w-64 max-w-96">
            <div className="p-10 bg-gray-200 flex flex-col gap-5">
              <div className="title-wrap">
                <h4 className="text-xl font-medium">Use Coupon Code</h4>
              </div>
              <div className=" flex flex-col gap-5">
                <p>Enter your coupon code if you have one.</p>
                <form className=" flex flex-col gap-5">
                  <input type="text" required="" name="name" />
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/3 min-w-64 max-w-96">
            <div className="p-10 bg-gray-200 flex flex-col gap-5">
              <div className="title-wrap">
                <h4 className="text-xl font-medium">Cart Total</h4>
              </div>
              <h5>
                Total products <span>$260.00</span>
              </h5>
              <div className=" flex flex-col gap-5">
                <h5>Total shipping</h5>
                <ul>
                  <li>
                    <input type="checkbox" /> Standard <span>$20.00</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Express <span>$30.00</span>
                  </li>
                </ul>
              </div>
              <h4 className="font-medium flex justify-between">
                Grand Total <span>$260.00</span>
              </h4>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
