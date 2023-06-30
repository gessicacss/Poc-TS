import { Book } from "../protocol/book.protocol";
import booksRepository from "../repositories/books.repositories";

async function createBook(book: Book) {
  const { rowCount: bookExists } = await booksRepository.getBooksByTitle(
    book.title
  );
  if (bookExists) {
    throw {
      name: "DuplicateBook",
      message: "This book already exists!",
    };
  }

  await booksRepository.createBook(book);
}

async function getAllBooks(): Promise<Book[]> {
  const result = await booksRepository.getAllBooks();
  return result.rows;
}

async function getBooksByGenre(genre: string): Promise<Book[]>  {
  const result = await booksRepository.getBooksByGenre(genre);
  return result.rows;
}

async function updateBook(id: number, book: Book) {
  const { status, review } = book;
  if (!status && !review) {
    throw {
      name: "InvalidValues",
      message: "You can't update with empty values!",
    };
  }

  const { rowCount: bookExists } = await booksRepository.getBookById(id);
  if (!bookExists) {
    throw {
      name: "NotFound",
      message: "This book doesn't exist!",
    };
  }
  
  const result = await booksRepository.updateBooks(id, status, review);
  return result;
}

async function deleteBook(id: number) {
  const { rowCount: bookExists } = await booksRepository.getBookById(id);
  if (!bookExists) {
    throw {
      name: "NotFound",
      message: "This book doesn't exist!",
    };
  }

  const result = await booksRepository.deleteBook(id);
  return result;
}

const bookService = {
    createBook,
    getAllBooks,
    getBooksByGenre,
    updateBook,
    deleteBook
};

export default bookService;