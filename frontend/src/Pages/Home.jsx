import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">
        Welcome to the E-Library
      </h1>

      <p className="text-lg text-center text-gray-600 mb-8 px-4 max-w-lg">
        Discover a wide range of books, contribute to our collection, and borrow
        your favorites. Join us in our mission to promote reading and learning
        for all.
      </p>

      <div className="mb-6">
        <img
          src="https://via.placeholder.com/600x400"
          alt="E-Library"
          className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
      `}</style>
    </div>
  );
};

export default Home;
