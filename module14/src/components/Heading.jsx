import Breadcrumb from "./Breadcrumb.jsx";

const Heading = ({pageTitle}) => {
    return (
        <div className="max-w-screen-xl mx-auto py-14">
            <h2 className="text-4xl mb-3">{pageTitle}</h2>
            <Breadcrumb />
        </div>
    );
};

export default Heading;