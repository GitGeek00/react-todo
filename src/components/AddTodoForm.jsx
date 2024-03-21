
function AddTodoForm(props) {

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.title.value.reset;
    props.onAddTodo(`Your input is ${todoTitle}`);
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input type="text" id="todoTitle" name="title" className='yourInput' />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddTodoForm;