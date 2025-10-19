import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    concluida: { type: Boolean, default: false },
})

export default mongoose.model('Todo', todoSchema);