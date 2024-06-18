
import TodoListItem from "./TodoListItem.jsx";
import styles from '../style/TodoListItem.module.css'
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo, color, onSort, srt, srt2, jsRef, paramRef, dateBtnRef }) {

    return (
        <>
            <ul>
                <p>{srt} Title&nbsp;&nbsp;<button ref={jsRef} className={styles.sortButton} onClick={onSort}>JS ↓</button>&nbsp;<button ref={paramRef} className={styles.sortButton} onClick={onSort}>Param ↓</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{srt2} Date&nbsp;<button ref={dateBtnRef} className={styles.sortButton} onClick={onSort}>By Date ↓</button></p>
                {todoList.map((item) => (
                    <TodoListItem color={color} key={item.id} todo={[item.title, item.date]} onRemoveTodo={() => onRemoveTodo(item.id)} />
                ))}
            </ul>
        </>
    )
}

TodoList.protoTypes = {
    TodoListItem: PropTypes.object
}

export default TodoList;