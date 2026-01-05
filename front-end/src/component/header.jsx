'use client'

import { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserCircleIcon from '@heroicons/react/24/solid/UserCircleIcon'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function NavBar() {
  const handleLogout = async () => {
    try {
      console.log("Logging out...");
      await signOut(auth);
      alert("User signed out");
    } catch (error) {
      console.error(error.message);
    }
  };

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false)


  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const searchHandler = () => {
    navigate('/search?keyword=' + keyword)
  }

  return (
    <div className={dark ? "dark" : ""}>
      <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to={"/"}>
            {/* Logo */}
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              MyShop
            </div>
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
            <li className="hover:text-blue-600 cursor-pointer">Categories</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>

          <div className="hidden md:flex items-center border rounded-lg px-2 dark:border-gray-700">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Enter Product Name..."
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchHandler()
                }
              }}
              className="px-2 py-1 text-sm bg-transparent outline-none dark:text-white"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">

            {/* User Dropdown */}
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              onMouseEnter={() => setUserMenuOpen(true)}
              className="relative"
            >
              <UserCircleIcon className="h-7 w-7 text-gray-700" />
            </button>

            {userMenuOpen && (
              <div
                onMouseLeave={() => setUserMenuOpen(false)}
                className="absolute right-0 top-10 w-44 rounded-md bg-white shadow-lg ring-1 ring-black/5"
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Orders
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}

            {/* Cart */}
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-gray-700 dark:text-white" />

            {/* Mobile Menu */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
            <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
              <li>Home</li>
              <li>Shop</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
            <div className="mt-3 flex items-center border rounded-lg px-2 dark:border-gray-700">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Enter Product Name..."
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchHandler()
                  }
                }}
                className="px-2 py-1 text-sm bg-transparent outline-none dark:text-white"
              />
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
