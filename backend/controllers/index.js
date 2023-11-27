const Todo = require("../models/todoSchema");

const createTodo = async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({ title });
  const data = await todo.save();

  res.send({
    status: "Todo created successfully",
    data,
  });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  res.send({
    status: "Todo deleted successfully",
  });
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, { title: req.body.title });
  res.send({
    status: "Todo updated successfully",
  });
};
const getallTodo = async (req, res) => {
  const todos = await Todo.find({});
  res.send({
    status: "Todo retrieved successfully",
    data: todos,
  });
};

module.exports = { createTodo, deleteTodo, getallTodo, updateTodo };
