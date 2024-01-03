export const BlogListItem = ({ image, user, title, description, date }) => {
  return (
    <div className="col-12 mb-50px">
      <div className="p-6 flex flex-col sm:flex-row gap-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="blog-image">
          <a href="blog-single-left-sidebar.html">
            <img src={image} className="img-responsive w-100" alt="" />
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <span className="blog-date">
              <i className="fa fa-calendar" aria-hidden="true"></i> {date}
            </span>
            <span>
              <a className="blog-author" href="blog-grid.html">
                <i className="fa fa-user" aria-hidden="true"></i> {user}
              </a>
            </span>
          </div>
          <h5 className="font-medium text-lg">
            <a
              className="blog-heading-link"
              href="blog-single-left-sidebar.html"
            >
              {title}
            </a>
          </h5>
          <p>{description}</p>

          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            {" "}
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
