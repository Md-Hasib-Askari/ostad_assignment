import blogImg1 from "../../assets/images/blog/1.webp";
import blogImg2 from "../../assets/images/blog/2.webp";
import blogImg3 from "../../assets/images/blog/3.webp";
import blogImg4 from "../../assets/images/blog/4.webp";
import blogImg5 from "../../assets/images/blog/5.webp";
import { BlogListItem } from "./BlogListItem.jsx";
import { Pagination } from "../Pagination.jsx";

export const BlogList = () => {
  const blogs = [
    {
      id: 1,
      user: "Kabir Akle",
      date: "27,Jun 2030",
      image: blogImg1,
      title: "The Top Reasons People Succeed in the Smart Product Industry.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      user: "Fahim Adnan",
      date: "27,Jun 2030",
      image: blogImg2,
      title: "10 Principles of Psychology to Improve Your Smart Product.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      user: "Bueat Odom",
      date: "27,Jun 2030",
      image: blogImg3,
      title: "Don't Make This Silly Mistake With Your Smart Product.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 4,
      user: "Shah Alam",
      date: "27,Jun 2030",
      image: blogImg4,
      title: "8 Effective Smart Product Elevator Pitches Modern Technology.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 5,
      user: "Kabir Akle",
      date: "27,Jun 2030",
      image: blogImg5,
      title: "The Intermediate Guide How to Use Smart Product.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <div className="max-w-screen-xl justify-center mx-auto py-20 px-5 xl:p-0">
      <div className="flex flex-col">
        <div className="max-w-2xl ms-auto me-auto">
          <div className="flex flex-col gap-5">
            {blogs.map((blog, index) => (
              <BlogListItem
                description={blog.description}
                title={blog.title}
                image={blog.image}
                user={blog.user}
                date={blog.date}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};
