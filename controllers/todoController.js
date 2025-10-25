import Todo from '../models/Todo.js';

export const todasTarefas = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

export const addTarefa = async (req, res) => {
    try {
        const { titulo, concluida } = req.body;

        const novaTarefa = new Todo({ titulo, concluida });
        const salva = await novaTarefa.save();

        res.json(salva);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao salvar tarefa', detalhes: err.message });
    }
};

export const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params; 
    console.log('Recebido toggle para id:', id);

    const todo = await Todo.findById(id);
    if (!todo) {
      console.log('Tarefa não encontrada:', id);
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    todo.concluida = !todo.concluida;
    await todo.save();

    console.log('Tarefa atualizada:', todo);
    res.json(todo); 
  } catch (erro) {
    console.error('Erro no toggleTodo:', erro);
    res.status(500).json({ error: 'Erro interno ao alternar tarefa' });
  }
};


export const deleteTarefa = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Tarefa removida" });
};