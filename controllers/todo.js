const { body } = require('express-validator');
const todo = require('../models/todo');
const Todo = require('../models/todo')
/*createTodo,
  getTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,*/

const createTodo = (req, res) => {
  const todo = req.body;
  const newTodo = new Todo({ title: todo.title, description: todo.description });
  newTodo.save((err, result) => {
    if (err) {
      res.json({ err: true });
    } else {
      res.json(result);
    }
  });
}



const deleteTodo = (req, res) => {
  const todoId = req.params.id;
  Todo.deleteOne({ _id: todoId }, (err, result) => {
    if (err) {
      return res.json({ err: true });
    } else {
      return res.json({ message: "deleted" })

    }
  });
}
const getAllTodos = (req, res) => {

  Todo.find((err, result) => {
    if (err) {
      res.json({ data: false });
    } else {
      res.json(result);
    }
  });
}
const updateTodo = (req, res) => {
  const todoId = req.params.id
  const todo = req.body
  Todo.updateOne({ _id: todoId }, {
    title: todo.title,
    description: todo.description
  }, function (err, affected, resp) {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ message: "Updated" })
    }
  })
}

module.exports = {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
}