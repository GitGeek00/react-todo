function TodoListItem({ todo }) {
    return (
        <>
            <li className="alignLeft">
                <h2>
                    <svg width="20px" height="20px" viewBox="0 0 192 150" xmlns="http://www.w3.org/2000/svg" fill="#358aeb"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#358aeb" strokeWidth="12" d="M80 105.485 48.284 73.769a4 4 0 0 0-5.657 0l-19.799 19.8a4 4 0 0 0 0 5.656L65.603 142"></path><rect width="36" height="132" x="147.279" y="37" stroke="#358aeb" strokeLinecap="round" strokeWidth="12" rx="4" transform="rotate(45 147.279 37)"></rect></g></svg>
                    &nbsp;{todo}
                </h2>
            </li>
        </>
    );
}

export default TodoListItem;