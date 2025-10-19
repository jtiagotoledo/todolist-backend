import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Todo from './models/Todo'

dotenv.config()
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor ok');
})

app.post('/tarefa', async (req, res) => {
    try {
        const { titulo, concluida } = req.body;

        const novaTarefa = new Todo({ titulo, concluida });
        const salva = novaTarefa.save();

        res.json({ mensagem: 'tarefa cadastrada', dados: salva });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao salvar tarefa', detalhes: err.message });
    }
});

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



