import { BillingDetails } from "./BillingDetails.jsx";
import { OrderDetails } from "./OrderDetails.jsx";

export const Billing = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto py-20 px-5 xl:px-0">
      <BillingDetails />
      <OrderDetails />
    </div>
  );
};
