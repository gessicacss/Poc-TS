import { Request, Response } from 'express';
import bookService from "@/services/books.services";
import httpStatus from 'http-status'
import { Book, createBook } from "@/protocol/book.protocol";

async function createBook(req: Request, res: Response) {
    const book = req.body as createBook;
    try {
        await bookService.createBook(book);
        res.status(httpStatus.CREATED).send("Book created!");
    } catch(err) {
        if (err.name === "DuplicateBook") {
            return res.status(httpStatus.CONFLICT).send(err.message);
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function getAllBooks(req: Request, res: Response){
    try {
        const books = await bookService.getAllBooks();
        res.status(httpStatus.OK).send(books);
    } catch(err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function getBooksByGenre(req: Request, res: Response) {
    const genre: string | string[] = req.query.genre as string;
        try {
        const books = await bookService.getBooksByGenre(genre);
        res.status(httpStatus.OK).send(books);
    } catch(err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function updateBook(req: Request, res: Response) {
    const { id } = req.params;
    const book = req.body as Book;
    try {
        await bookService.updateBook(parseInt(id), book);
        res.status(httpStatus.OK).send("Book updated!");
    } catch(err) {
        if (err.name === "NotFound") {
            return res.status(httpStatus.NOT_FOUND).send(err.message);
        }
        if (err.name === "InvalidValues") {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function deleteBook(req: Request, res: Response) {
    const { id } = req.params;
    try {
        await bookService.deleteBook(parseInt(id));
        res.status(httpStatus.OK).send("Book deleted!");
    } catch(err) {
        if (err.name === "NotFound") {
            return res.status(httpStatus.NOT_FOUND).send(err.message);
        }
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

const bookController = {
    createBook,
    getAllBooks,
    getBooksByGenre,
    updateBook,
    deleteBook
}

export default bookController;