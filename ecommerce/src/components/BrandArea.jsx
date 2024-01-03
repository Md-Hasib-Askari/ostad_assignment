import BrandCarousel from "./BrandCarousel.jsx";

export const BrandArea = () => {
  return (
    <div className="py-20 px-5 xl:px-0 max-w-screen-xl mx-auto">
      <a
        href="#"
        className="block px-6 py-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <BrandCarousel />
      </a>
    </div>
  );
};
