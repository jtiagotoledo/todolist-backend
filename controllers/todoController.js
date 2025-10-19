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

        res.json({ mensagem: 'tarefa cadastrada', dados: salva });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao salvar tarefa', detalhes: err.message });
    }
};

export const toggleTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
};


export const deleteTarefa = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Tarefa removida" });
};