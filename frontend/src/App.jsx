import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Home from "../Pages/Home";
import AddBookForm from "../Components/AddBookForm";
import Contribute from "../Pages/Contribute";
import BookList from "../Components/BookList";

function App() {
 
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">E-Library Management</h1>

          <div></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<AddBookForm />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/Booklist" element={<BookList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
