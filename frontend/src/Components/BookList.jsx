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
    <div className="mx-auto p-4 border border-gray-300 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Available Books 📚 </h2>

      <p className="mb-4 text-gray-700 text-sm">
        Explore our diverse collection of books! Whether you’re looking for the
        latest bestsellers or timeless classics, you’ll find something for
        everyone.
        <br />
        <br />
        Search by title or author to find your next great read. Enjoy borrowing
        with just a click! 🌟
      </p>

      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="border border-gray-300 rounded-lg p-2 w-full md:w-64 focus:border-blue-500 focus:outline-none shadow-md hover:shadow-lg"
        />
      </div>

      {filteredBooks.length === 0 ? (
        <div className="text-red-500">🚫 No records found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm font-bold">
                  Title
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm font-bold">
                  Author
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm font-bold">
                  Genre
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm font-bold">
                  Published on
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm font-bold">
                  Borrowable
                </th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm font-bold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#bde0fe]">
              {filteredBooks.map((book) => (
                <tr key={book._id} className="hover:bg-blue-100">
                  <td className="py-3 px-4 text-normal text-sm truncate">
                    {book.title}
                  </td>
                  <td className="py-3 px-4 text-normal text-sm truncate">
                    {book.author}
                  </td>
                  <td className="py-3 px-4 text-normal text-sm truncate">
                    {book.genre}
                  </td>
                  <td className="py-3 px-4 text-normal text-sm truncate">
                    {book.publicationDate}
                  </td>
                  <td className="py-3 px-4 text-normal text-sm truncate">
                    {book.isBorrowable ? (
                      <span className="text-green-500 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-500 font-semibold">No</span>
                    )}
                  </td>
                  <td className="py-3 px-4 flex space-x-2">
                    <FaEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      title="Edit"
                      onClick={() => handleEdit(book)}
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      title="Delete"
                      onClick={() => handleDelete(book._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookList;
