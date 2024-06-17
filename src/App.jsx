import { useState, useEffect } from "react";
import "./style/App.css";
import styles from './style/TodoListItem.module.css'
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasicMenu from './components/BasicMenu'
import { useRef } from 'react';


function App() {
  const [color, setColor] = useState('#358aeb')
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paramSorting, setParamSorting] = useState('');
  const [jsSorting, setJsSorting] = useState(0);
  const [srt, setSrt] = useState('↕');
  const [srt2, setSrt2] = useState('↕');

  console.log('start Render');
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    }
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}${paramSorting}`
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      if (jsSorting > 0) {
        if (jsBtnRef.current.textContent == "JS ↓") {
          data.records.sort(compareTitleAsc);
          jsBtnRef.current.textContent = "JS ↑"
          paramBtnRef.current.textContent = 'Param ↑';
          setSrt('↓');
        } else if (jsBtnRef.current.textContent == "JS ↑") {
          data.records.sort(compareTitleDesc);
          jsBtnRef.current.textContent = "JS ↕"
          paramBtnRef.current.textContent = 'Param ↕';
          setSrt('↑');
        } else {
          jsBtnRef.current.textContent = "JS ↓"
          paramBtnRef.current.textContent = 'Param ↓';
          setSrt('↕');
        }
      }

      const todos = data.records.map((todo) => ({ id: todo.id, title: todo.fields.title, date: todo.fields.completedAt }));

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
    fetchData();
  }, [jsSorting, paramSorting])

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

  const compareTitleAsc = (a, b) => {
    const titleA = a.fields.title.toUpperCase();
    const titleB = b.fields.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  }

  const compareTitleDesc = (a, b) => {
    const titleA = a.fields.title.toUpperCase();
    const titleB = b.fields.title.toUpperCase();
    if (titleA > titleB) {
      return -1;
    }
    if (titleA < titleB) {
      return 1;
    }
    return 0;
  }

  const handleSort = (e) => {
    if (e.target.textContent.substring(0, 2) == 'JS') {
      setSrt2('↕');
      setParamSorting('');
      dateBtnRef.current.textContent = 'By Date ↓';
      setJsSorting(jsSorting + 1);
    } else if (e.target.textContent.substring(0, 5) == 'Param') {
      setJsSorting(0);
      setSrt2('↕');
      dateBtnRef.current.textContent = 'By Date ↓';
      if (e.target.textContent.substring(e.target.textContent.length - 1) == '↓') {
        setParamSorting('?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc');
        setSrt('↓');
        paramBtnRef.current.textContent = 'Param ↑';
        jsBtnRef.current.textContent = "JS ↑";
      } else if (e.target.textContent.substring(e.target.textContent.length - 1) == '↑') {
        setParamSorting('?view=Grid%20view&sort[0][field]=title&sort[0][direction]=desc');
        setSrt('↑');
        paramBtnRef.current.textContent = 'Param ↕'
        jsBtnRef.current.textContent = "JS ↕";
      } else {
        setParamSorting('');
        setSrt('↕');
        paramBtnRef.current.textContent = 'Param ↓'
        jsBtnRef.current.textContent = "JS ↓";
      }
    } else {
      setJsSorting(0);
      setSrt('↕');
      paramBtnRef.current.textContent = 'Param ↕'
      jsBtnRef.current.textContent = "JS ↕";
      if (e.target.textContent.substring(e.target.textContent.length - 1) == '↓') {
        setParamSorting('?view=Grid%20view&sort[0][field]=completedAt&sort[0][direction]=asc');
        setSrt2('↓');
        dateBtnRef.current.textContent = 'By Date ↑';
      } else if (e.target.textContent.substring(e.target.textContent.length - 1) == '↑') {
        setParamSorting('?view=Grid%20view&sort[0][field]=completedAt&sort[0][direction]=desc');
        setSrt2('↑');
        dateBtnRef.current.textContent = 'By Date ↕';
      } else {
        setParamSorting('');
        setSrt2('↕');
        dateBtnRef.current.textContent = 'By Date ↓';
      }

    }
  }

  const jsBtnRef = useRef(null);
  const paramBtnRef = useRef(null);
  const dateBtnRef = useRef(null);

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
                    <TodoList
                      color={color}
                      todoList={todoList}
                      onRemoveTodo={removeTodo}
                      onSort={handleSort}
                      srt={srt}
                      srt2={srt2}
                      jsRef={jsBtnRef}
                      paramRef={paramBtnRef}
                      dateBtnRef={dateBtnRef}
                    />
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