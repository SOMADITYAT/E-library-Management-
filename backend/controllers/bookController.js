import BookModel from "../models/bookModel.js";

export const addBook = async (req, res) => {
  const { title, author, genre, publicationDate, isBorrowable } = req.body;

  try {
    const book = new BookModel({
      title,
      author,
      genre,
      publicationDate,
      isBorrowable,
    });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publicationDate, isBorrowable } = req.body;

  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      {
        title,
        author,
        genre,
        publicationDate,
        isBorrowable,
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const filterBooks = async (req, res) => {
  const { search } = req.query;

  try {
    const books = await BookModel.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { genre: { $regex: search, $options: "i" } },
        { publicationDate: { $regex: search, $options: "i" } },
      ],
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
