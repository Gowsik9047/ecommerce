import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    //     const product = {
    //   _id: "1",
    //   name: "Men Leather Wallet",
    //   price: 1100,
    //   category: "fashion",
    //   rating: 4.6,
    //   stock: 12,
    //   seller: "Urban Style",
    //   image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    //   images: [
    //     "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    //     "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
    //   ],
    //   description: "Premium quality leather wallet with multiple compartments."
    // };

    const [count, setCount] = useState(1);
    const increase = () => setCount(count + 1);
    const decrease = () => count > 1 && setCount(count - 1);

    const [product, setProduct] = useState(null);
    const {id} = useParams()

    // useEffect(() => {
    //     fetch(import.meta.env.VITE_API_URL + '/product/' + id)
    //         .then(res => res.json())
    //         .then(data => {
    //             try {
    //                 if (data.success) {
    //                     console.log(data);

    //                     setProduct(data.products);
    //                 }
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         })
    // },[])
 useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/products/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                try {
                    if (data.success) {
                        setProduct(data.product);
                    }
                } catch (error) {
                    console.error(error);
                }
            });
    }, []);
    console.log(product);
    
    return (
        product && <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 py-24 sm:py-32">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* LEFT – IMAGE SECTION */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-contain"
                    />

                    {/* Thumbnails */}
                    <div className="flex gap-3 mt-4">
                        {(product.images || [product.image]).map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className="w-16 h-16 object-contain border rounded cursor-pointer hover:border-indigo-500"
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT – PRODUCT INFO */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6">

                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {product.name}
                    </h1>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Brand: <span className="text-indigo-600">{product.seller}</span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mt-3">
                        ⭐⭐⭐⭐☆
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                            {product.rating || 4.5} / 5
                        </span>
                    </div>

                    {/* Price */}
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                        ₹{product.price}
                    </p>

                    <p className="text-sm text-green-600 mt-1">
                        In Stock ({product.stock} items)
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-4 mt-6">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            Quantity:
                        </span>

                        <div className="flex items-center border rounded">
                            <button
                                onClick={decrease}
                                className="px-3 py-1 text-lg bg-gray-200 dark:bg-gray-700"
                            >
                                -
                            </button>
                            <span className="px-4">{count}</span>
                            <button
                                onClick={increase}
                                className="px-3 py-1 text-lg bg-gray-200 dark:bg-gray-700"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold">
                            Add to Cart
                        </button>

                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                            Buy Now
                        </button>
                    </div>

                    {/* Delivery */}
                    <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
                        🚚 Free Delivery within 3–5 days
                        <br />
                        🔄 7 Days Replacement
                    </div>
                </div>
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="max-w-6xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Product Description
                </h2>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
