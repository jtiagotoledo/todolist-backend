import express from 'express';
import cors from 'cors';
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Servidor ok');
})

app.post('/aluno',(req,res)=>{
    const aluno = req.body;
    res.json({mensagem:'aluno cadastrado',dados:aluno});
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})

