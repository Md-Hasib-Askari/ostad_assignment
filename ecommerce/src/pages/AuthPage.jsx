import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { LoginForm } from "../components/AuthPage/LoginForm.jsx";
import { RegisterForm } from "../components/AuthPage/RegisterForm.jsx";

export const AuthPage = () => {
  const changeForm = (form) => {
    const loginForm = document.getElementById("login");
    const signupForm = document.getElementById("signup");
    if (form === "login") {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    } else {
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
    }
  };
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="text-center text-2xl mb-10">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={() => changeForm("login")}
            >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
            </button>
            <span className="text-gray-700">| </span>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={() => changeForm("signup")}
            >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Register
                  </span>
            </button>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <LoginForm title="Login" />
              <RegisterForm title="Create an account" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
