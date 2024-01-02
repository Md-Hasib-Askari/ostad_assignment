import bgImg from '../../assets/images/background/breadcrunb-bg.webp'

export const Heading = ({pageTitle}) => {
    const divStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="flex flex-col items-center gap-4 py-40" style={divStyle}>
            <h3 className="text-5xl font-medium">{pageTitle}</h3>
            <nav className="flex justify-between" aria-label="Breadcrumb">
                <ol className="inline-flex items-center mb-3 sm:mb-0">
                    <li>
                        <div className="flex items-center">
                            <button id="dropdownProject" data-dropdown-toggle="dropdown-project" className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                                Home
                            </button>
                        </div>
                    </li>
                    <span className="mx-2 text-gray-400">/</span>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <button id="dropdownDatabase" data-dropdown-toggle="dropdown-database" className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                                Product
                            </button>
                        </div>
                    </li>
                </ol>
            </nav>

        </div>
    )
}