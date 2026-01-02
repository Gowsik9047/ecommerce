

export default function Home() {
return (
<main>
<section className="bg-green-100 dark:bg-gray-800">
<div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-4xl font-bold mb-4">Everything Your Pet Needs</h2>
<p className="mb-6">Food, Toys, Accessories & Health Care</p>
<button className="bg-green-600 text-white px-6 py-3 rounded">Shop Now</button>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-4 py-12">
<h3 className="text-2xl font-semibold mb-6">Shop by Category</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-6 bg-white dark:bg-gray-800 rounded-xl text-center shadow">🐶 Dogs</div>
<div className="p-6 bg-white dark:bg-gray-800 rounded-xl text-center shadow">🐱 Cats</div>
<div className="p-6 bg-white dark:bg-gray-800 rounded-xl text-center shadow">🐦 Birds</div>
<div className="p-6 bg-white dark:bg-gray-800 rounded-xl text-center shadow">🐠 Fish</div>
</div>
</section>


<section className="bg-gray-50 dark:bg-gray-900">
<div className="max-w-7xl mx-auto px-4 py-12">
<h3 className="text-2xl font-semibold mb-6">Popular Products</h3>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
<h4 className="font-semibold">Premium Dog Food</h4>
<p className="text-green-600 font-bold">₹999</p>
<button className="mt-3 w-full bg-green-600 text-white py-2 rounded">Add to Cart</button>
</div>
</div>
</div>
</section>
</main>
);
}