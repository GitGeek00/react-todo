import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState(""); // This hook especially to make input controlled input

  const handleTitleChange = (event) => { // This event handler especially for controlled input purpose, input controlled value always need onChange event handler
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
          <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>Title: </InputWithLabel>  {/* todoTitle here is to controle the input and will assign to it value*/}
        </span>
        <button className="button1" type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
