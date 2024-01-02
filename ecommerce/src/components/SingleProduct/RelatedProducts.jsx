import ProductCarousel from "./ProductCarousel.jsx";

export const RelatedProducts = () => {
    return (
        <div className="flex flex-col py-20 gap-5 max-w-screen-xl mx-auto">
            <h3 className="text-center text-3xl font-bold">Related Products</h3>
            <p className="text-center">There are many variations of passages of Lorem Ipsum available</p>
            <ProductCarousel />
        </div>
    )
}