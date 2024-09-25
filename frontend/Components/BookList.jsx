import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [filteredBooks, setFilteredBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/books");
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (search) {
      const results = books.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBooks(results);
    } else {
      setFilteredBooks(books);
    }
  }, [search, books]);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (book) => {
    navigate("/add-book", { state: { existingBook: book } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Books</h2>

      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Search by title or author..."
          className="border border-gray-300 rounded-lg p-3 w-full md:w-80 transition duration-200 focus:border-blue-500 focus:outline-none shadow-md"
        />
      </div>

      {filteredBooks.length === 0 ? (
        <div className="text-red-500">No records found.</div> // Message when no records are found
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-2 px-4">Title</th>
              <th className="text-left py-2 px-4">Author</th>
              <th className="text-left py-2 px-4">Genre</th>
              <th className="text-left py-2 px-4">Published on</th>
              <th className="text-left py-2 px-4">Borrowable</th>
              <th className="text-left py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr
                key={book._id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-2 px-4 border-b">{book.title}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.genre}</td>
                <td className="py-2 px-4 border-b">{book.publicationDate}</td>
                <td className="py-2 px-4 border-b">
                  {book.isBorrowable ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <FaEdit
                    className="text-blue-500 cursor-pointer"
                    title="Edit"
                    onClick={() => handleEdit(book)}
                  />
                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    title="Delete"
                    onClick={() => handleDelete(book._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;
