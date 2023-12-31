import { BsArrowRightCircleFill } from "react-icons/bs";

export const Product = ({ productImg, isFull }) => {
  return (
    <div className="w-full relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full"
          src={productImg}
          alt="product image"
        />
      </a>
      <div className="absolute bottom-6 xl:bottom-12 px-20 w-full">
        <div className="flex flex-col gap-5">
          <h3 className="md:text-2xl xl:text-4xl font-bold">
            Smart Watch For <br />
            Your Hand
          </h3>
          <div
            className={`flex ${
              !isFull ? "flex-col gap-3" : ""
            } justify-between`}
          >
            <span className="md:text-lg xl:text-xl font-medium">
              From $29.00
            </span>
            <a href="shop-left-sidebar.html" className="">
              <BsArrowRightCircleFill className="size-6 md:size-10 text-primary-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
