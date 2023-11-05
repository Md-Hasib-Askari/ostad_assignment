import {FaAppStoreIos} from "react-icons/fa6";
import {AiFillHtml5, AiFillDollarCircle} from "react-icons/ai";
import {FaBusinessTime, FaStackOverflow} from "react-icons/fa";
import FeaturedContentSingle from "./FeaturedContentSingle.jsx";

function FeaturedContent() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Featured contents
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem excepturi illo labore maiores neque nobis omnis quam quasi repudiandae!
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <FeaturedContentSingle
                        title="App Development"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eveniet laborum perspiciatis quisquam tempora. A cumque debitis, fugit laudantium maxime tempore velit! Adipisci iste molestias nisi odit quaerat qui."
                        icon={<FaAppStoreIos/>}
                    />
                    <FeaturedContentSingle
                        title="Web Development"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eveniet laborum perspiciatis quisquam tempora. A cumque debitis, fugit laudantium maxime tempore velit! Adipisci iste molestias nisi odit quaerat qui."
                        icon={<AiFillHtml5/>}
                    />
                    <FeaturedContentSingle
                        title="Business Automation"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eveniet laborum perspiciatis quisquam tempora. A cumque debitis, fugit laudantium maxime tempore velit! Adipisci iste molestias nisi odit quaerat qui."
                        icon={<FaBusinessTime/>}
                    />
                    <FeaturedContentSingle
                        title="Finance"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eveniet laborum perspiciatis quisquam tempora. A cumque debitis, fugit laudantium maxime tempore velit! Adipisci iste molestias nisi odit quaerat qui."
                        icon={<AiFillDollarCircle/>}
                    />
                    <FeaturedContentSingle
                        title="Enterprise Design"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda eveniet laborum perspiciatis quisquam tempora. A cumque debitis, fugit laudantium maxime tempore velit! Adipisci iste molestias nisi odit quaerat qui."
                        icon={<FaStackOverflow/>}
                    />
                </div>
            </div>
        </section>
    );
}

export default FeaturedContent;