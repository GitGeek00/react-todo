import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
  
    if (todoTitle) {
      onAddTodo({ id: Date.now(), title: todoTitle });
    }
    
    event.target.title.focus();
    setTodoTitle("");
  };
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <span className="todoBrdr">
          <label htmlFor="todoTitle">Title: </label>
          <input
            type="text"
            id="todoTitle"
            name="title"
            className="yourInput"
            onChange={handleTitleChange}
            value={todoTitle}
          />
        </span>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
