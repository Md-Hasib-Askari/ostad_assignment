import { BillingDetails } from "./BillingDetails.jsx";
import { OrderDetails } from "./OrderDetails.jsx";

export const Billing = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto py-20">
      <BillingDetails />
      <OrderDetails />
    </div>
  );
};
