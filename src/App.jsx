import { useState } from "react";
import "./style/App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  }
  
  return (
    <>
      <h1 className="welcome fade-out">
        Welcome to My Todo List REACT Application
      </h1>
      <div className="todoList">
        <h1>My Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
      </div>
    </>
  );
}

export default App;
