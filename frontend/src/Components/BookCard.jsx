import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p className="text-gray-600">Author: {book.author}</p>
        <p className="text-gray-600">Genre: {book.genre}</p>
        <p className="text-gray-600">Published on: {book.publicationDate}</p>
        <p className="text-gray-600">Borrowable: {book.isBorrowable ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default BookCard;
