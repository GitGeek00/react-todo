import TodoListItem from "./TodoListItem.jsx";

var todoList = [
    { id: 1, title: "Complete Lesson 1_3" },
    { id: 2, title: "Complete Assessment for Lesson 1_3" },
    { id: 3, title: "Complete the Mindset task" },
    { id: 4, title: "Submit the assessment" },
];

function TodoList() {
    return (
        <>
            <ul>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} todo={item.title} />
                ))}
            </ul>
        </>
    )
}

export default TodoList;