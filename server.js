import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config()
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/tarefas", todoRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        })

    }).catch((err) => {
        console.log('Erro ao conectar ao MongoDB', err);
    })



