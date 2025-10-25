import express from 'express';
import { todasTarefas, addTarefa, toggleTodo, deleteTarefa } from '../controllers/todoController.js';

const router = express.Router();

router.get('/',todasTarefas);
router.post('/',addTarefa);
router.put('/:id/toggle',toggleTodo);
router.delete('/:id',deleteTarefa);

export default router;