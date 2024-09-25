import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    isBorrowable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
