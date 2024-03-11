function TodoListItem(props) {
    return (
        <>
            <li className="alignLeft"><h2>☼ {props.todo}</h2></li>
        </>
    );
}

export default TodoListItem;