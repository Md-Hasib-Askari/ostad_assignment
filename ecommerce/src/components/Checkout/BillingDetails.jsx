import { InputForm } from "./InputForm.jsx";
import { useState } from "react";

export const BillingDetails = () => {
  const [isSignupForm, setSignupForm] = useState(false);
  const [isAddressForm, setAddressForm] = useState(false);

  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-medium">Billing Details</h3>
        <div className="flex flex-wrap gap-5">
          <InputForm fieldName={"First Name"} />
          <InputForm fieldName={"Last Name"} />
          <InputForm fieldName={"Company Name"} isFullWidth={true} />
          <InputForm fieldName={"Country"} isFullWidth={true} />
          <InputForm fieldName={"Street Address"} isFullWidth={true} />
          <InputForm fieldName={"Town / City"} />
          <InputForm fieldName={"State / County"} />
          <InputForm fieldName={"Postcode / ZIP"} />
          <InputForm fieldName={"Phone"} />
          <InputForm fieldName={"Email Address"} isFullWidth={true} />
        </div>
        <div className="flex gap-2 mb-30px">
          <input onChange={() => setSignupForm(!isSignupForm)} checked={isSignupForm} className="w-auto h-auto" type="checkbox" />
          <label>Create an account?</label>
        </div>
        {
          isSignupForm && (
            <div className="flex flex-col gap-5 w-[94%] mb-30">
              <InputForm fieldName={"Email Address"} isFullWidth={true} />
              <InputForm fieldName={"Password"} isFullWidth={true} />
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
            </div>
          )
        }

        <div className="flex flex-col gap-5">
          <h4 className="font-medium text-lg">Additional information</h4>
          <div className="flex flex-col gap-5">
            <label>Order notes</label>
            <textarea
              rows={5}
              className="block p-2.5 w-[94%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Notes about your order, e.g. special notes for delivery. "
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="mt-25">
          <input onChange={() => setAddressForm(!isAddressForm)} checked={isAddressForm}
                 className="mr-2 w-auto h-auto" type="checkbox" />
          <label>Ship to a different address?</label>
        </div>
        {
          isAddressForm && (
            <div className="different-address open-toggle mt-30px">
              <div className="flex flex-wrap gap-5">
                <InputForm fieldName={"First Name"} />
                <InputForm fieldName={"Last Name"} />
                <InputForm fieldName={"Company Name"} isFullWidth={true} />
                <InputForm fieldName={"Country"} isFullWidth={true} />
                <InputForm fieldName={"Street Address"} isFullWidth={true} />
                <InputForm fieldName={"Town / City"} />
                <InputForm fieldName={"State / County"} />
                <InputForm fieldName={"Postcode / ZIP"} />
                <InputForm fieldName={"Phone"} />
                <InputForm fieldName={"Email Address"} isFullWidth={true} />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};
