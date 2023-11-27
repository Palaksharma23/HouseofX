import "./App.css";
import { useEffect, useRef, useState } from "react";
import Card from "./components/Card/card";
import Form from "./components/Form/Form";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [todos, setTodos] = useState([]);
  // const dragItem = useRef();
  // const dragOverItem = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // const dragStart = (e, position) => {
  //   dragItem.current = position;
  //   console.log(e.target.innerHtml);
  // };

  // const dragEnter = (e, position) => {
  //   dragOverItem.current = position;
  //   console.log(e.target.innerHtml);
  // };

  async function getTodos() {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/get-all-todos"
      );
      console.log(response);
      setTodos(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  function updateTodos(data) {
    console.log("data");
    console.log(data);
    console.log([...todos, data]);
    setTodos([...todos, data]);
  }
  useEffect(() => {
    getTodos();
  }, []);

  const currentRecords = todos.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(todos.length / recordsPerPage);

  return (
    <>
      <Form updatetodos={updateTodos} />
      {currentRecords.length > 0 &&
        currentRecords.map((todo, index) => (
          <Card
            key={todo._id}
            id={todo._id}
            title={todo.title}
            getTodos={getTodos}
            draggable
          />
        ))}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
