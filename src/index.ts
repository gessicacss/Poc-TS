import express, { Request, Response } from "express";
import cors from 'cors';
import bookRouter from "@/routers/books.routes";

const app = express();

app
.use(cors())
.use(express.json())
.get('/health', (req: Request, res: Response) => res.send('cool cool cool'))
.use(bookRouter);

app.listen(5000, () => {
    console.log('server is listening')
});