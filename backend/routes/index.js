const express = require("express");

const todoController = require("../controllers/index");
const router = express.Router();

// ToDo: endpoints naming convention

router.post("/create-todo", todoController.createTodo);
router.delete("/delete-todo/:id", todoController.deleteTodo);
router.patch("/update-todo/:id", todoController.updateTodo);
router.get("/get-all-todos", todoController.getallTodo);
module.exports = router;
