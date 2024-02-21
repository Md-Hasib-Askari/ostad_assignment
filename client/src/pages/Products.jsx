import {AddProductModal} from "../components/products/AddProductModal.jsx";
import {useEffect, useRef, useState} from "react";
import {DeleteConfirmationModal} from "../components/products/DeleteConfirmationModal.jsx";
import {getProducts} from "../api/productData.js";
import {useProductStore} from "../store/Product.js";

export const Products = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const {openForm, setOpenForm, products, setProducts, setFormData} = useProductStore((state) => ({
    openForm: state.openForm,
    setOpenForm: state.setOpenForm,
    products: state.products,
    setProducts: state.setProducts,
    formData: state.formData,
    setFormData: state.setFormData
  }));
  const deleteRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data.data);
    })()
  }, []);

  const handleDelete = (index) => {
    setDeleteProduct(products[index]._id);
    deleteRef.current.classList.remove("hidden");
    deleteRef.current.classList.add("flex");
  }

  const handleAddProduct = () => {
    setFormData({
      _id: "",
      name: "",
      brand: "",
      category: "",
      description: "",
      image: null
    });
    setOpenForm(!openForm);
  }
  const handleUpdate = (index) => {
    const product = products[index];
    setFormData({
        _id: product._id,
        name: product.name,
        brand: product.brand,
        category: product.category,
        description: product.description,
        image: product.image
    });
    setOpenForm(!openForm);
  }

  return (
    <div className="m-4 p-1 relative overflow-x-auto max-w-screen-xl mx-auto">
      <button
          type="button"
          className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleAddProduct()}
      >
        + Add Product
      </button>
      <AddProductModal />
        <div className="mb-5 pb-2">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Products</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              List of all products
            </p>
            <div className="flex justify-between w-full">
              <div className="h-4 my-5">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                  <div
                      className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <input type="text" id="table-search"
                         className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Search for items"/>
                </div>
              </div>
              <div className="content-end justify-end my-5">
                Sort By
              </div>
            </div>
      </div>
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
        {
            products.map((product, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      {
                            product.image ? (
                                <img
                                    src={product.image}
                                    className="w-24 h-24 mx-auto max-w-full max-h-full"
                                    alt={product.name}
                                />
                            ) : (
                                <div className="w-24 h-24 mx-auto bg-gray-200 dark:bg-gray-600">{product.image}</div>
                            )
                      }
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.name}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center">{product.description}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.category}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.brand}
                    </td>
                    <td className="px-6 py-4">
                        <button
                            onClick={() => handleUpdate(index)}
                            className="mr-3 p-2 rounded-md bg-primary-500 font-medium text-white hover:bg-primary-600"
                        >
                            Update
                        </button>
                        <button
                            className="p-2 rounded-md bg-red-500 font-medium text-white hover:bg-red-600"
                            onClick={() => handleDelete(index)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            ))
        }
        </tbody>
      </table>
      <DeleteConfirmationModal productID={deleteProduct} deleteRef={deleteRef} />
    </div>
  );
};
