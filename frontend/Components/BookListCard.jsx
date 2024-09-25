import React, { useState } from "react";


const BookListCard = () => {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="relative p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Book List</h1>
      <button
        onClick={handleSeeMoreClick}
        className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        {showMore ? "See Less" : "See More"}
      </button>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ${
          showMore ? "h-auto" : "h-48 overflow-hidden"
        }`}
      >
        {books.slice(0, showMore ? books.length : 4).map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListCard;
