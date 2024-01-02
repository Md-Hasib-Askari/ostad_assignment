import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { BlogList } from "../components/Blog/BlogList.jsx";
import { Heading } from "../components/SingleProduct/Heading.jsx";

export const Blog = () => {
  return (
    <>
      <Header />
      <Heading pageTitle={"Blog"} />
      <BlogList />
      <Footer />
    </>
  );
};
