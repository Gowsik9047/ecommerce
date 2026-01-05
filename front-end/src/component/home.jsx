import { Fragment, useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./products/ProductCard";

export default function Home() {
    const [Products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/products?' + searchParams)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                try {
                    if (data.success) {
                        setProducts(data.products);
                    }
                } catch (error) {
                    console.error(error);
                }
            });
    }, [searchParams]);
    console.log(Products);
    return (
        <Fragment >
            <HeroSection />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-screen dark:bg-gray-900 p-6">
                {Products.map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
        </Fragment>
    );
}