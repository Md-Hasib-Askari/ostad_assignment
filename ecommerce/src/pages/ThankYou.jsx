import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";

import completedLogo from "../assets/images/completed_logo.webp";

export const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="py-20 flex flex-col gap-5 items-center justify-center">
        <img src={completedLogo} alt="Thank you" />
        <h1 className="text-3xl">Thank you for your order!</h1>
        <p className="text-xl">We appreciate your business!</p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Continue Shopping
        </button>
      </div>
      <Footer />
    </>
  );
};
