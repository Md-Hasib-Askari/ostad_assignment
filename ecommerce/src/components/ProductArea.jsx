import { ProductCard } from "./ProductCard.jsx";

export const ProductArea = () => {
  const productTypes = ["New Arrivals", "Top Rated", "Featured", "Contacts"];

  function changeView(productType) {
    switch (productType) {
      case "newarrivals":
        document.getElementById("new-arrivals").classList.remove("hidden");
        document.getElementById("top-rated").classList.add("hidden");
        document.getElementById("featured").classList.add("hidden");
        document.getElementById("contacts").classList.add("hidden");
        break;
      case "toprated":
        document.getElementById("new-arrivals").classList.add("hidden");
        document.getElementById("top-rated").classList.remove("hidden");
        document.getElementById("featured").classList.add("hidden");
        document.getElementById("contacts").classList.add("hidden");
        break;
      case "featured":
        document.getElementById("new-arrivals").classList.add("hidden");
        document.getElementById("top-rated").classList.add("hidden");
        document.getElementById("featured").classList.remove("hidden");
        document.getElementById("contacts").classList.add("hidden");
        break;
      case "contacts":
        document.getElementById("new-arrivals").classList.add("hidden");
        document.getElementById("top-rated").classList.add("hidden");
        document.getElementById("featured").classList.add("hidden");
        document.getElementById("contacts").classList.remove("hidden");
        break;
      default:
        document.getElementById("new-arrivals").classList.remove("hidden");
        document.getElementById("top-rated").classList.add("hidden");
        document.getElementById("featured").classList.add("hidden");
        document.getElementById("contacts").classList.add("hidden");
        break;
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto pb-20">
      <div className="max-w-screen-xl mx-auto border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {productTypes.map((productType, index) => (
            <li className="me-2" role="presentation" key={index}>
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() =>
                  changeView(productType.toLowerCase().replace(/\s/g, ""))
                }
              >
                {productType}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="new-arrivals"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="top-rated"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Top Rated tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="featured"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Featured tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};
