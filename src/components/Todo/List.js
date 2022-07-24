import React from 'react'

function List({ todos, setTodos }) {
    const changeCheck = (e) => {
        setTodos(todos.map((todo) => ({...todo , status: e.target.checked})))
    }
    // setTodos(todos.map(item =>
    //     (item.id === todo.id ? { ...item, completed: !item.completed } : item))
    // )
    return (
        <div className='todoList'>
            {
                todos.map((todo) => {
                    return <div key={todo.id}>
                        <input id={todo.id} type='checkbox' checked={todo.status} onChange={changeCheck} />
                        <label htmlFor={todo.id}>
                            {todo.title}
                        </label>
                    </div>
                })
            }
        </div>
    )
}


export default List;