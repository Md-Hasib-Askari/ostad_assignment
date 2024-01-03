import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Accordion } from "../components/FAQ/Accordion.jsx";
import { Heading } from "../components/SingleProduct/Heading.jsx";

export const FAQ = () => {
  return (
    <div>
      <Header />
      <Heading pageTitle="FAQs" />
      <div className="flex flex-col gap-10 mx-auto max-w-screen-xl px-5 xl:px-0 py-20">
        <h1 className="text-3xl">
          Below are frequently asked questions, you may find the answer for
          yourself{" "}
        </h1>
        <Accordion />
      </div>
      <Footer />
    </div>
  );
};
