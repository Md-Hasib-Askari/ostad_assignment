export const InputForm = ({ fieldName, isFullWidth = false }) => {
  return (
    <div className={`${isFullWidth ? "w-full mr-10" : "w-[45%]"}`}>
      <div className={`flex flex-col w-full`}>
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {fieldName}
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};
