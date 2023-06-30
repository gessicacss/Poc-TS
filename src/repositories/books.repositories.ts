import { db } from "@/config/database.connection";
import { Book } from "@/protocol/book.protocol";

function createBook(book: Book) {
  const { title, image, description, genre } = book;

  return db.query(
    `
  INSERT INTO books (title, image, description, genre) VALUES ($1, $2, $3, $4)
  `,
    [title, image, description, genre]
  );
}

function getAllBooks() {
  return db.query(`SELECT * FROM books`);
}

function getBooksByTitle(title: string) {
  return db.query(
    `
    SELECT * FROM books
    WHERE title ILIKE $1`,
    [`%${title}%`]
  );
}

function getBookById(id: number) {
  return db.query(
    `
    SELECT * FROM books
    WHERE id=$1`,
    [id]
  );
}

function getBooksByGenre(genre: string) {
  return db.query(
    `
    SELECT * FROM books
    WHERE genre ILIKE $1`,
    [`%${genre}%`]
  );
}

function updateBooks(id: number, status: string, review: string) {
  return db.query(
    `
    UPDATE books SET status=$1, review=$2 
    WHERE id=$3
    `,
    [status, review, id]
  );
}

function deleteBook(id: number) {
  return db.query(
    `
    DELETE FROM books WHERE id=$1
    `,
    [id]
  );
}

const booksRepository = {
  createBook,
  getAllBooks,
  getBooksByTitle,
  getBookById,
  getBooksByGenre,
  updateBooks,
  deleteBook,
};

export default booksRepository;
