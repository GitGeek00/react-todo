
import TodoListItem from "./TodoListItem.jsx";
import PropTypes from 'prop-types';

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

TodoList.protoTypes = {
    TodoListItem: PropTypes.object
}

export default TodoList;