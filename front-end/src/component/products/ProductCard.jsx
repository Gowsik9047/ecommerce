import {Link} from "react-router-dom";


export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      
      <div className="relative">
        <img
          src={product.image}   // backend field
          alt={product.name}
          className="h-48 w-full object-contain bg-gray-100 dark:bg-gray-700 p-4"
        />
      </div>

      <div className="p-4">
        <Link to={"/product/"+product._id}>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
          {product.name}
        </h2>

        <div className="flex items-center mt-1">
          ⭐
          <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
            {product.rating || 4.5}
          </span>
        </div>

        <p className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
          ₹{product.price}
        </p>
        </Link>

      <Link to={"/product/"+product._id}>
      <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
          View Details
        </button>
      </Link>
        
      </div>
    </div>
  );
}
