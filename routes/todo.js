const express = require("express");
const router = express.Router();

// these are the controllers
// we will create all of them in the future
const {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} = require("../controllers/todo");


router.route('/').get(getAllTodos).post(createTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)

module.exports = router;
