import { useState, useEffect, Fragment } from "react";
import "./style/App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: localStorage.getItem("savedTodoList")
              ? JSON.parse(localStorage.getItem("savedTodoList"))
              : []
          }
        });
      }, 2000)
    });
    promise.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id != id));
  }

  return (
    <>
      {(isLoading)
        ?
        <>
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
          <h1>Loading.....</h1>
          <h1 className="welcome">
            Welcome to My Todo List REACT Application
          </h1>
          <h1 className="welcome">Developer: Maher Algepah</h1>
        </>
        : <>
          <div className="todoList">
            <h1>My Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </div>
        </>
      }
    </>
  );
}

export default App;
