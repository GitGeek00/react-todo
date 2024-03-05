import "./App.css";

var todoList = [
    { id: 1, title: "Complete Assessment for Lesson 1.2" },
    { id: 2, title: "50% Completed Assessment" },
    { id: 3, title: "Not Started" },
];

function TodoList() {
    return (
        <>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id} className="alignLeft"><h2>☼ {item.title}</h2></li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;