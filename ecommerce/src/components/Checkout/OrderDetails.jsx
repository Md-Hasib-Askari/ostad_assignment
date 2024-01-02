export const OrderDetails = () => {
  return (
    <div className="max-w-lg mt-md-30px mt-lm-30px ">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-medium">Your order</h3>
        <div className="flex flex-col gap-5 bg-gray-200 p-10">
          <div className="flex flex-col gap-5">
            <div className="flex">
              <ul className="flex w-full justify-between font-bold">
                <li>Product</li>
                <li>Total</li>
              </ul>
            </div>
            <hr className="bg-gray-300 h-[2px]" />
            <div className="your-order-middle">
              <ul className="flex flex-col gap-5 w-full justify-between">
                <li className="flex w-full justify-between">
                  <span className="order-middle-left">Product Name X 1</span>
                  <span className="order-price">$100 </span>
                </li>
                <li className="flex w-full justify-between">
                  <span className="order-middle-left">Product Name X 1</span>
                  <span className="order-price">$100 </span>
                </li>
              </ul>
            </div>
            <hr className="bg-gray-300 h-[2px]" />
            <div className="your-order-bottom">
              <ul className="flex w-full justify-between">
                <li className="font-bold">Shipping</li>
                <li>Free shipping</li>
              </ul>
            </div>
            <hr className="bg-gray-300 h-[2px]" />
            <div className="your-order-total">
              <ul className="flex w-full justify-between">
                <li className="font-bold">Total</li>
                <li>$100</li>
              </ul>
            </div>
          </div>
          <hr className="bg-gray-300 h-[2px]" />
          <div className="payment-method">
            <div className="payment-accordion element-mrg">
              <div id="faq" className="panel-group">
                <div className="panel panel-default single-my-account m-0">
                  <div className="panel-heading my-account-title">
                    <h4 className="font-medium">
                      <a
                        data-bs-toggle="collapse"
                        href="#my-account-1"
                        className="collapsed"
                        aria-expanded="true"
                      >
                        Direct bank transfer
                      </a>
                    </h4>
                  </div>
                  <div
                    id="my-account-1"
                    className="panel-collapse collapse show"
                    data-bs-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default single-my-account m-0">
                  <div className="panel-heading my-account-title">
                    <h4 className="font-medium">
                      <a
                        data-bs-toggle="collapse"
                        href="#my-account-2"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        Check payments
                      </a>
                    </h4>
                  </div>
                  <div
                    id="my-account-2"
                    className="panel-collapse collapse"
                    data-bs-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default single-my-account m-0">
                  <div className="panel-heading my-account-title">
                    <h4 className="font-medium">
                      <a data-bs-toggle="collapse" href="#my-account-3">
                        Cash on delivery
                      </a>
                    </h4>
                  </div>
                  <div
                    id="my-account-3"
                    className="panel-collapse collapse"
                    data-bs-parent="#faq"
                  >
                    <div className="panel-body">
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-25">
          <a className="btn-hover" href="#">
            Place Order
          </a>
        </div>
      </div>
    </div>
  );
};
