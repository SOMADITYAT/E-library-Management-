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
    <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 shadow-lg sticky top-0">
      <div className="text-2xl font-bold mb-8">E-Library</div>

      <ul className="space-y-6">
        <li className="group hover:bg-gray-600 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/">
            <div className="flex items-center space-x-3">
              <FaHome className="text-xl text-gray-300 group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white transition duration-300">
                Home
              </span>
            </div>
          </Link>
        </li>

        <li className="group hover:bg-gray-600 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/booklist">
            <div className="flex items-center space-x-3">
              <FaFilter className="text-xl text-gray-300 group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white transition duration-300">
                Booklist
              </span>
            </div>
          </Link>
        </li>

        <li className="group hover:bg-gray-600 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/contribute">
            <div className="flex items-center space-x-3">
              <FaHandsHelping className="text-xl text-gray-300 group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white transition duration-300">
                Contribute
              </span>
            </div>
          </Link>
        </li>

        <li className="group hover:bg-gray-600 p-3 rounded-lg transition duration-300 ease-in-out">
          <Link to="/borrow">
            <div className="flex items-center space-x-3">
              <FaShoppingCart className="text-xl text-gray-300 group-hover:text-white" />
              <span className="text-lg font-medium group-hover:text-white transition duration-300">
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
