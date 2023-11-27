import React, { useState } from "react";
import "./card.css";
import axios from "axios";
import { useRef } from "react";

function Card(props) {
  const titleref = useRef();

  const [formOpen, setFormOpen] = useState(false);
  async function deleteTodo(e) {
    e.preventDefault();
    try {
      const string = "http://localhost:5000/api/delete-todo/" + props.id;
      const response = await axios.delete(string);
      props.getTodos();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateTodo(e) {
    e.preventDefault();
    try {
      const string = "http://localhost:5000/api/update-todo/" + props.id;
      const response = await axios.patch(string, {
        title: titleref.current.value,
      });
      props.getTodos();
      console.log(response);
      setFormOpen(false);
      titleref.current.value = "";
    } catch (error) {
      console.error(error);
    }
  }

  async function openform() {
    setFormOpen(true);
  }
  return (
    <div className="todo-container">
      {!formOpen && <h2 className="todo-heading">{props.title}</h2>}
      {formOpen && (
        <form onSubmit={updateTodo}>
          <label>Enter the title of the todo todo:</label>
          <input type="text" ref={titleref}></input>
          <button type="submit">Update</button>
        </form>
      )}
      {!formOpen && (
        <button className="update-button" onClick={openform}>
          Update
        </button>
      )}
      <button className="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}

export default Card;
