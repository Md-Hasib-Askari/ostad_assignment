import {ProductCard} from "./ProductCard.jsx";

export const ProductArea = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                    data-tabs-toggle="#default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                                data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                                aria-selected="false">New Arrivals
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                            aria-controls="dashboard" aria-selected="false">Top Rated
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                            aria-controls="settings" aria-selected="false">Featured
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
                            aria-controls="contacts" aria-selected="false">Contacts
                        </button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                     aria-labelledby="profile-tab">
                    <div className="flex flex-wrap gap-3 justify-between">

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
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel"
                     aria-labelledby="dashboard-tab">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated
                        content</strong>. Clicking another tab will toggle the visibility of this one for the next. The
                        tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel"
                     aria-labelledby="settings-tab">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript
                        swaps classes to control the content visibility and styling.</p>
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel"
                     aria-labelledby="contacts-tab">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript
                        swaps classes to control the content visibility and styling.</p>
                </div>
            </div>

        </div>
    )
}