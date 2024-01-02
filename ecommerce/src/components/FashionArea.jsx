import fasionBgImg from "../assets/images/fashion-bg.webp";

export const FashionArea = () => {
  const divStyle = {
    backgroundImage: `url(${fasionBgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
  };

  return (
    <div
      className="flex flex-col justify-center align-items-center h-100"
      style={divStyle}
    >
      <div className="flex flex-col max-w-screen-xl mx-auto gap-12 text-center">
        <h2 className="text-5xl font-bold text-white leading-normal">
          <span className="font-normal">Smart Fashion</span>
          <br />
          With Smart Devices{" "}
        </h2>
        <button
          type="button"
          className="text-white hover:text-white border-2 border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Shop All Devices
        </button>
      </div>
    </div>
  );
};
