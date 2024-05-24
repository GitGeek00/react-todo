import { useState, useEffect } from "react";
import "./style/App.css";
import styles from './style/TodoListItem.module.css'
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasicMenu from './components/BasicMenu'


function App() {
  const [color, setColor] = useState('#358aeb')
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },

    }
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      const todos = data.records.map((todo) => ({ id: todo.id, title: todo.fields.title }));

      setTodoList(todos);
      setIsLoading(false);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = async (newTodo) => {
    setIsLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({ "fields": { "title": newTodo } })
    }

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setTodoList([{ id: data.id, title: data.fields.title }, ...todoList]);
      setIsLoading(false);


    } catch (error) {
      console.log(error.message);
    }
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id != id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
        {(
          <>
            {(isLoading)
              ?
              <>
                <div className={styles.skCubeGrid}>
                  <div className={`${styles.skCube} ${styles.skCube1}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube2}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube3}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube4}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube5}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube6}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube7}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube8}`}></div>
                  <div className={`${styles.skCube} ${styles.skCube9}`}></div>
                </div>
                <h1>Loading.....</h1>
                <h1 className={styles.welcome}>
                  Welcome to My Todo List REACT Application
                </h1>
                <h1 className={styles.welcome}>Developer: Maher Algepah</h1>
              </>
              :
              <>
                <BasicMenu color={color} setColor={setColor} />

                <div className={styles.todoList}>
                  <h1>My Todo List</h1>
                  <AddTodoForm onAddTodo={addTodo} />
                  <TodoList color={color} todoList={todoList} onRemoveTodo={removeTodo} />
                </div>
              </>
            }
          </>
        )} />
        <Route path="/new" element={(<h1>New Todo List</h1>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
