import React from "react";
import {
  FaHome,
  FaFilter,
  FaHandsHelping,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-black p-6 shadow-lg sticky top-0">
      <div className="text-2xl font-bold mb-8">E-Library</div>

      <ul className="space-y-6">
        <li className="group hover:bg-gray-200 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/">
            <div className="flex items-center space-x-3">
              <FaHome className="text-xl text-gray-600 group-hover:text-black" />
              <span className="text-lg font-medium group-hover:underline group-hover:text-black transition duration-300">
                Home
              </span>
            </div>
          </Link>
        </li>

        <li className="group hover:bg-gray-200 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/booklist">
            <div className="flex items-center space-x-3">
              <FaFilter className="text-xl text-gray-600 group-hover:text-black" />
              <span className="text-lg font-medium group-hover:underline group-hover:text-black transition duration-300">
                Booklist
              </span>
            </div>
          </Link>
        </li>

        <li className="group hover:bg-gray-200 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/contribute">
            <div className="flex items-center space-x-3">
              <FaHandsHelping className="text-xl text-gray-600 group-hover:text-black" />
              <span className="text-lg font-medium group-hover:underline group-hover:text-black transition duration-300">
                Contribute
              </span>
            </div>
          </Link>
        </li>

        <li className="group hover:bg-gray-200 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/borrow">
            <div className="flex items-center space-x-3">
              <FaShoppingCart className="text-xl text-gray-600 group-hover:text-black" />
              <span className="text-lg font-medium group-hover:underline group-hover:text-black transition duration-300">
                Borrow
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
