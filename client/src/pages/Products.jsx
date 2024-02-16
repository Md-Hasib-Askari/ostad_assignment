import {AddProductModal} from "../components/products/AddProductModal.jsx";
import {useRef} from "react";
import {DeleteConfirmationModal} from "../components/products/DeleteConfirmationModal.jsx";

export const Products = () => {
  const deleteRef = useRef(null);

  const handleDelete = () => {
    deleteRef.current.classList.remove("hidden");
  }

  return (
    <div className="m-4 relative overflow-x-auto max-w-screen-xl mx-auto">
      <AddProductModal />
      <table className="shadow-md sm:rounded-lg border w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
              <img
                src="https://picsum.photos/200"
                className="w-16 md:w-32 max-w-full max-h-full"
                alt="Apple Watch"
              />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Apple Watch
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">This is a description</div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Laptop
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Apple
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="mr-3 font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Update
              </a>
              <button
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                onClick={handleDelete}
              >
                Remove
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
              <img
                src="/docs/images/products/imac.png"
                className="w-16 md:w-32 max-w-full max-h-full"
                alt="Apple iMac"
              />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              iMac 27"
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">This is a description</div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Computer
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Apple
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="mr-3 font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Update
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
              <img
                src="/docs/images/products/iphone-12.png"
                className="w-16 md:w-32 max-w-full max-h-full"
                alt="iPhone 12"
              />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              IPhone 12
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">This is a description</div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Phone
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Apple
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="mr-3 font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Update
              </a>
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <DeleteConfirmationModal deleteRef={deleteRef} />
    </div>
  );
};
