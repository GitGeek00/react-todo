import { useState, useEffect } from "react";
import "./style/App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("savedTodoList")
      ? JSON.parse(localStorage.getItem("savedTodoList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id != id));
  }

  return (
    <>
      <h1 className="welcome fade-out">
        Welcome to My Todo List REACT Application
      </h1>
      <div className="todoList">
        <h1>My Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </div>
    </>
  );
}

export default App;
