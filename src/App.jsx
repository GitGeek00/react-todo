import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import "./App.css";


function App() {

  const [newTodo , setNewTodo] = React.useState('');

  return (
    <div className="todoList">
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p className='yourInput'>{newTodo ? `Your input: |${newTodo}|` : 'Your input goes here'}</p>
      <TodoList />
    </div>
  );
}

export default App;
