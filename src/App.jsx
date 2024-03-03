import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

var todoList = [
  { id: 1, title: "Complete Assessment" },
  { id: 2, title: "50% Completed Assessment" },
  { id: 3, title: "Not Started" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
