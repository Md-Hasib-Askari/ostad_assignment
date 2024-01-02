import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Authentication",
      path: "/auth",
    },
    {
      name: "Cart",
      path: "/cart",
    },
    {
      name: "Checkout",
      path: "/checkout",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
    {
      name: "Privacy Policy",
      path: "/privacy",
    },
    {
      name: "Terms of Service",
      path: "/tos",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav
      className="hidden py-3 bg-primary-700 justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium text-white lg:flex-row lg:space-x-8 lg:mt-0">
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.path}
              className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-50 lg:p-0 dark:text-white"
              aria-current="page"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
