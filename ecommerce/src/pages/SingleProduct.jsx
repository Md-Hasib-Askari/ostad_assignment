import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Heading} from "../components/SingleProduct/Heading.jsx";
import {ProductDetails} from "../components/SingleProduct/ProductDetails.jsx";
import {RelatedProducts} from "../components/SingleProduct/RelatedProducts.jsx";

export const SingleProduct = () => {
    return (
        <>
            <Header />
            <Heading />
            <ProductDetails />
            <RelatedProducts />
            <Footer />
        </>
    )
}