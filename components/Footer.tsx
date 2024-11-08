import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">TechInnovate</h3>
            <p className="text-gray-400">
              Innovating the future with cutting-edge technology solutions.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-pink-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>React & Next.js Development</li>
              <li>Mobile App Development</li>
              <li>AI & Machine Learning</li>
              <li>Web3 & Blockchain</li>
              <li>IoT Solutions</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} TechInnovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
