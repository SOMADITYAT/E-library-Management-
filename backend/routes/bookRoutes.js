import express from "express";
import {
  addBook,
  deleteBook,
  filterBooks,
  getBooks,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBook);

router.get("/", getBooks);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

router.get("/filter", filterBooks);

export default router;
