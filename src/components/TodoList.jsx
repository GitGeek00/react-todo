import TodoListItem from "./TodoListItem.jsx";

function TodoList({ todoList, onRemoveTodo }) {
    return (
        <>
            <ul>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} todo={item.title} onRemoveTodo={() => onRemoveTodo(item.id)} />
                ))}
            </ul>
        </>
    )
}

export default TodoList;