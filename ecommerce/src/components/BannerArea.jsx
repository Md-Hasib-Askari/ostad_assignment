import product3 from '../assets/images/p-3.webp';
import product4 from '../assets/images/product-4.webp';
import product5 from '../assets/images/product-5.webp';
import {Product} from "./Product.jsx";

export const BannerArea = () => {
    return (
        <div className="flex gap-10 max-w-screen-xl mx-auto my-20">
            <div className="w-1/2">
                <Product productImg={product3} isFull={true}/>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <Product productImg={product4} />
                <Product productImg={product5} />
            </div>
        </div>
    )
}