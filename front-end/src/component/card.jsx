// ProductList.jsx
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const products = [
  {
    id: 1,
    title: "Apple iPhone 15",
    price: "₹79,999",
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: "₹74,999",
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg",
  },
  {
    id: 3,
    title: "Sony Headphones",
    price: "₹9,999",
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg",
  },
  {
    id: 4,
    title: "Apple Watch",
    price: "₹29,999",
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/71v8bp+SybL._SX679_.jpg",
  },
  {
    id: 5,
    title: "Dell Laptop",
    price: "₹64,999",
    rating: 4.2,
    img: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg",
  },
  {
    id: 6,
    title: "Canon Camera",
    price: "₹54,999",
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/71EWRyqzw0L._SX679_.jpg",
  },
  {
    id: 7,
    title: "Gaming Mouse",
    price: "₹1,999",
    rating: 4.1,
    img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._SX679_.jpg",
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    price: "₹3,999",
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/71Qn0J8j1EL._SX679_.jpg",
  },
  {
    id: 9,
    title: "Smart TV",
    price: "₹39,999",
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SX679_.jpg",
  },
  {
    id: 10,
    title: "AirPods Pro",
    price: "₹24,999",
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/61f1YfTkTDL._SX679_.jpg",
  },
];

export default function CardList() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="h-48 w-full object-contain bg-gray-100 dark:bg-gray-700 p-4"
              />
              {/* <button className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow">
                <FavoriteBorderIcon className="text-gray-600 dark:text-gray-300" />
              </button> */}
            </div>

            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                {product.title}
              </h2>

              <div className="flex items-center mt-1">
                <StarIcon className="text-yellow-400 text-sm" />
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                  {product.rating}
                </span>
              </div>

              <p className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                {product.price}
              </p>

              <button className="mt-3 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                {/* <ShoppingCartIcon fontSize="small" /> */}
                {/* Add to Cart */}
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
