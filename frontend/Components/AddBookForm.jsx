import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const AddBookForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingBook = location.state?.existingBook;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [isBorrowable, setIsBorrowable] = useState(false);

  useEffect(() => {
    if (existingBook) {
      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setGenre(existingBook.genre);
      setPublicationDate(existingBook.publicationDate);
      setIsBorrowable(existingBook.isBorrowable);
    }
  }, [existingBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      genre,
      publicationDate,
      isBorrowable,
    };

    try {
      let response;
      if (existingBook) {
        response = await axiosInstance.put(
          `/books/${existingBook._id}`,
          bookData
        );
        console.log("Book Updated: ", response.data);
      } else {
        response = await axiosInstance.post("/books", bookData);
        console.log("Book Added: ", response.data);
      }
      navigate("/"); // Redirect to home or the book list
    } catch (error) {
      console.error(
        "Error saving book: ",
        error.response ? error.response.data : error.message
      );
      if (error.response) {
        console.log("Error details:", error.response);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-8/12  mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {existingBook ? "Edit Book" : "Add New Book"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book title"
              required
            />
          </div>


          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="author"
            >
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author's name"
              required
            />
          </div>


          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="genre"
              >
                Genre:
              </label>
              <select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Biography">Biography</option>
                <option value="Self-Help">Self-Help</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="publicationDate"
              >
                Published on:
              </label>
              <input
                type="date"
                id="publicationDate"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isBorrowable}
                onChange={(e) => setIsBorrowable(e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-700">Borrowable</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
          >
            {existingBook ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
