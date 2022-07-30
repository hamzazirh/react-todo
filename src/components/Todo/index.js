import { useState } from 'react';

import Form from './Form';
import List from './List';
import Footer from './Footer';
import './style.css'

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
        <Footer todos={todos} setTodos={setTodos} />
      </header>
    </div>
  )

}

export default Todo;