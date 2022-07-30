import React from 'react'

function List({ todos, setTodos }) {
    const changeCheck = (e) => {
        setTodos(todos.map(todo =>
            (e.target.id === todo.id.toString() ? { ...todo, status: e.target.checked } : todo)
        ))
    }

    const deleteTodo = (e) => {
        setTodos(todos.filter(
            todo => todo.id.toString() !== e.target.getAttribute('todoid')
        ))
    }

    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => {
                    return <li key={todo.id}>
                        <input id={todo.id} type='checkbox' className='toggle' checked={todo.status} onChange={changeCheck} />
                        <label htmlFor={todo.id}>
                            {todo.title}
                        </label>
                        <button className="destroy" todoid={todo.id} onClick={deleteTodo}></button>
                    </li>
                })
            }
        </ul>
    )
}


export default List;