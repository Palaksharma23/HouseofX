import React from "react";
import "./Form.css";
import axios from "axios";
import { useRef } from "react";

function Form({ updatetodos }) {
  const titleref = useRef();
  //   updatetodos();

  async function createTodo(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-todo",
        { title: titleref.current.value }
      );
      console.log(response);
      titleref.current.value = "";

      updatetodos(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={createTodo}>
        <label>Title of the todo: </label>
        <input type="text" name="title" ref={titleref}></input>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default Form;
