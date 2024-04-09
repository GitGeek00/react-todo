import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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

    setTodoTitle("");
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <span className="todoBrdr">
          <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>Title: </InputWithLabel>
        </span>
        <button className="button1" type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
