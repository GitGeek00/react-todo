import React from "react";
import "./style/App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {

  const [newTodo , setNewTodo] = React.useState('Your input goes here');

  return (
    <div className="todoList">
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p className='yourInput'>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
