function Footer({ todos, setTodos }) {
    const leftCount = todos.filter(todo => {
        return todo.status === false;
    }).length

    const clearCompleted = () => {
        setTodos(todos.map(todo => ({...todo , status: false})))
    }


    return (
        <footer className='footer'>
            <span className="todo-count">
                <strong>{leftCount}</strong> items left
            </span>
            <div className="filters">
                <li>
                    <a  href="#/" className="selected">All</a>
                </li>
                <li>
                    <a  href="#/">Active</a>
                </li>
                <li>
                    <a  href="#/">Completed</a>
                </li>
            </div>
            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer;