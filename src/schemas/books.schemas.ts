import joi from "joi";
import { Book } from "@/protocol/book.protocol";

export const bookSchema = joi.object<Book>({
    title: joi.string().required(),
    image: joi.string().uri().required(),
    description: joi.string().required(),
    genre: joi.string().required(),
})
