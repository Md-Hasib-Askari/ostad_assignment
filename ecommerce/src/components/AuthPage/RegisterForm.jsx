import { InputForm } from "../Checkout/InputForm.jsx";

export const RegisterForm = ({ title }) => {
  return (
    <form className="hidden space-y-4 md:space-y-6" action="#" id="signup">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        {title}
      </h1>
      <InputForm fieldName={"Your name"} isFullWidth={true} />
      <InputForm fieldName={"Your email"} isFullWidth={true} />
      <InputForm fieldName={"Password"} isFullWidth={true} />
      <InputForm fieldName={"Confirm Password"} isFullWidth={true} />
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required=""
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
    </form>
  );
};
