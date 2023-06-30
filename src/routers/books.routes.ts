import { Router } from "express";
import bookController from "@/controllers/books.controllers";
import validateSchema from "@/middlewares/validateSchemas.middleware";
import { bookSchema } from "@/schemas/books.schemas";

const bookRouter = Router();

bookRouter.post('/new-book', validateSchema(bookSchema), bookController.createBook );
bookRouter.get('/', bookController.getAllBooks);
bookRouter.get('/books', bookController.getBooksByGenre);
bookRouter.put('/book/:id', bookController.updateBook)
bookRouter.delete('/book/:id', bookController.deleteBook )

export default bookRouter;