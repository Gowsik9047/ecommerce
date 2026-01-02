export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                ⚡
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                YourCompany
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <span className="sr-only">Facebook</span>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <span className="sr-only">Instagram</span>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <span className="sr-only">Twitter</span>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <span className="sr-only">GitHub</span>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-indigo-600">Marketing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Analytics</a></li>
              <li><a href="#" className="hover:text-indigo-600">Automation</a></li>
              <li><a href="#" className="hover:text-indigo-600">Commerce</a></li>
              <li><a href="#" className="hover:text-indigo-600">Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-indigo-600">Submit ticket</a></li>
              <li><a href="#" className="hover:text-indigo-600">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-600">Guides</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Jobs</a></li>
              <li><a href="#" className="hover:text-indigo-600">Press</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 PetCare Mart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
