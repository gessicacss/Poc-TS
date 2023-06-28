import express from "express";
import cors from 'cors';

const app = express();

app
.use(cors())
.use(express.json())
.get('/health', (req, res) => res.send('cool cool cool'))

app.listen(5000, () => {
    console.log('server is listening')
});