import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { LoginForm } from "../components/AuthPage/LoginForm.jsx";

export const AuthPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20 text-center text-2xl mb-10">
        <button>Login</button> | <button>Register</button>
      </div>
      <LoginForm />
      <Footer />
    </>
  );
};
