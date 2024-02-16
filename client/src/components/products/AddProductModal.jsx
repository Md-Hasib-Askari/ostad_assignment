import { useState } from "react";
import {Dropzone} from "../Dropzone.jsx";

export const AddProductModal = ({name, brand, category, description, image} = {name: "", brand: "", category: "", description: "", image: null}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setOpen(!open)}
      >
        + Add Product
      </button>
      <div
        className={`${open ? "backdrop-blur-md" : "hidden"} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative rounded-lg shadow bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
              <h3 className="text-lg font-semibold text-white">
                {name ? "Update Product" : "Create New Product"}
              </h3>
              <button
                type="button"
                className="text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Type product name"
                    value={name}
                  />
                </div>
                <div className="col-span-2">
                  <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-white"
                  >
                    Brand
                  </label>
                  <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Type Brand name"
                      value={brand}
                  />
                </div>
                <div className="col-span-2">
                  <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-white"
                  >
                    Category
                  </label>
                  <input
                      type="text"
                      name="category"
                      id="category"
                      className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Type category"
                      value={category}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm  rounded-lg border bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    value={description}
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <Dropzone image={image} size="h-32" />
              <button
                type="submit"
                className="mt-3 text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
