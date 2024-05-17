
import TodoListItem from "./TodoListItem.jsx";

function TodoList({ todoList, onRemoveTodo, color }) {

    return (
        <>
            <ul>
                {todoList.map((item) => (
                    <TodoListItem color={color} key={item.id} todo={item.title} onRemoveTodo={() => onRemoveTodo(item.id)} />
                ))}
            </ul>
        </>
    )
}

export default TodoList;